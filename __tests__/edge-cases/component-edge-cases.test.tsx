import { render, screen } from '@testing-library/react';
import HeroSection from '../../components/HeroSection';
import CTASection from '../../components/CTASection';
import Navigation from '../../components/Navigation';

// Mock the Logo component
jest.mock('../../components/Logo', () => {
  return function MockLogo({ className }: { className?: string }) {
    return (
      <div className={className} data-testid="logo">
        Logo
      </div>
    );
  };
});

describe('Component Edge Cases', () => {
  it('handles undefined onRequestAudit gracefully', () => {
    // This tests TypeScript's type safety, but we can test runtime behavior
    const mockUndefined = undefined as any;

    expect(() => {
      render(<HeroSection onRequestAudit={mockUndefined} />);
    }).not.toThrow();
  });

  it('handles multiple rapid clicks', () => {
    const mockFn = jest.fn();
    render(<CTASection onRequestAudit={mockFn} />);

    const button = screen.getByRole('button', {
      name: /start your security audit/i,
    });

    // Rapidly click multiple times
    for (let i = 0; i < 5; i++) {
      button.click();
    }

    expect(mockFn).toHaveBeenCalledTimes(5);
  });

  it('renders with very long callback execution', async () => {
    const slowCallback = jest.fn().mockImplementation(() => {
      // Simulate slow callback
      return new Promise(resolve => setTimeout(resolve, 100));
    });

    render(<Navigation onRequestAudit={slowCallback} />);

    const button = screen.getByRole('button', { name: /request audit/i });
    button.click();

    expect(slowCallback).toHaveBeenCalled();
  });

  it('maintains accessibility with screen readers', () => {
    render(<Navigation onRequestAudit={jest.fn()} />);

    const hamburgerButton = screen.getByRole('button', {
      name: /toggle mobile menu/i,
    });
    expect(hamburgerButton).toHaveAttribute('aria-label', 'Toggle mobile menu');
  });

  it('handles keyboard navigation', () => {
    render(<HeroSection onRequestAudit={jest.fn()} />);

    const button = screen.getByRole('button', {
      name: /request security audit/i,
    });

    // Should be focusable
    button.focus();
    expect(document.activeElement).toBe(button);
  });
});
