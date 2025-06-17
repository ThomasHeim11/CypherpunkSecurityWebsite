import '@testing-library/jest-dom';

// Mock window.open
global.open = jest.fn();

// Mock scrollTo
global.scrollTo = jest.fn();

// Check if window is defined before trying to access it
if (typeof window !== 'undefined') {
  // Mock matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
} else {
  // For node environment, create a mock
  global.matchMedia = jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
}

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock environment variables
process.env.NEXT_PUBLIC_TYPEFORM_URL =
  'aHR0cHM6Ly9mb3JtLnR5cGVmb3JtLmNvbS90by90ZXN0';
process.env.NEXT_PUBLIC_LINKEDIN_URL =
  'aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvdGVzdA==';
process.env.NEXT_PUBLIC_X_URL = 'aHR0cHM6Ly94LmNvbS90ZXN0';
