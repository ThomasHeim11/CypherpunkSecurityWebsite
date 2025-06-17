import { render } from '@testing-library/react';
import ScrollToTop from '../../components/ScrollToTop';

// Mock window.scrollTo
const mockScrollTo = jest.fn();
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true,
});

// Mock history.scrollRestoration
Object.defineProperty(history, 'scrollRestoration', {
  value: 'auto',
  writable: true,
  configurable: true,
});

// Mock document properties
let mockDocumentHidden = false;
Object.defineProperty(document, 'hidden', {
  get: () => mockDocumentHidden,
  configurable: true,
});

describe('ScrollToTop Component', () => {
  beforeEach(() => {
    mockScrollTo.mockClear();
    mockDocumentHidden = false;
    history.scrollRestoration = 'auto';
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders without crashing', () => {
    render(<ScrollToTop />);
    // Component returns null, so just check it doesn't throw
  });

  it('scrolls to top on mount', () => {
    render(<ScrollToTop />);

    expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('sets scroll restoration to manual when supported', () => {
    // Mock scrollRestoration support
    const originalScrollRestoration = history.scrollRestoration;
    delete (history as any).scrollRestoration;
    Object.defineProperty(history, 'scrollRestoration', {
      value: 'auto',
      writable: true,
      configurable: true,
    });

    render(<ScrollToTop />);

    expect(history.scrollRestoration).toBe('manual');

    // Restore
    Object.defineProperty(history, 'scrollRestoration', {
      value: originalScrollRestoration,
      writable: true,
      configurable: true,
    });
  });

  it('handles missing scrollRestoration gracefully', () => {
    // Remove scrollRestoration support
    const originalScrollRestoration = history.scrollRestoration;
    delete (history as any).scrollRestoration;

    expect(() => render(<ScrollToTop />)).not.toThrow();

    // Restore
    Object.defineProperty(history, 'scrollRestoration', {
      value: originalScrollRestoration,
      writable: true,
      configurable: true,
    });
  });

  it('sets up delayed scroll timer', () => {
    render(<ScrollToTop />);

    // Fast-forward timer
    jest.advanceTimersByTime(100);

    expect(mockScrollTo).toHaveBeenCalledTimes(2); // Once immediate, once from timeout
  });

  it('adds visibility change listener', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');

    render(<ScrollToTop />);

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'visibilitychange',
      expect.any(Function)
    );

    addEventListenerSpy.mockRestore();
  });

  it('scrolls when page becomes visible', () => {
    let visibilityChangeHandler: () => void = () => {};

    const addEventListenerSpy = jest
      .spyOn(document, 'addEventListener')
      .mockImplementation((event, handler) => {
        if (event === 'visibilitychange') {
          visibilityChangeHandler = handler as () => void;
        }
      });

    render(<ScrollToTop />);

    // Clear previous calls
    mockScrollTo.mockClear();

    // Set document as visible and trigger handler
    mockDocumentHidden = false;
    visibilityChangeHandler();

    expect(mockScrollTo).toHaveBeenCalledWith(0, 0);

    addEventListenerSpy.mockRestore();
  });

  it('does not scroll when page is hidden', () => {
    let visibilityChangeHandler: () => void = () => {};

    const addEventListenerSpy = jest
      .spyOn(document, 'addEventListener')
      .mockImplementation((event, handler) => {
        if (event === 'visibilitychange') {
          visibilityChangeHandler = handler as () => void;
        }
      });

    render(<ScrollToTop />);

    // Clear previous calls
    mockScrollTo.mockClear();

    // Set document as hidden and trigger handler
    mockDocumentHidden = true;
    visibilityChangeHandler();

    expect(mockScrollTo).not.toHaveBeenCalled();

    addEventListenerSpy.mockRestore();
  });

  it('cleans up on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');

    const { unmount } = render(<ScrollToTop />);

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'visibilitychange',
      expect.any(Function)
    );

    removeEventListenerSpy.mockRestore();
  });

  it('clears timeout on unmount', () => {
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

    const { unmount } = render(<ScrollToTop />);

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();

    clearTimeoutSpy.mockRestore();
  });
});
