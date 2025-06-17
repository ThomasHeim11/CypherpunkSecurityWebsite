import { render, screen } from '@testing-library/react';
import NotFound from '../../app/not-found';

describe('NotFound Page', () => {
  it('renders 404 error message', () => {
    render(<NotFound />);

    expect(screen.getByText(/access denied/i)).not.toBeNull();
    expect(screen.getByText(/404/i)).not.toBeNull();
  });

  it('has link back to home', () => {
    render(<NotFound />);

    // The actual link text is "→ RETURN TO BASE"
    const homeLink = screen.getByRole('link', {
      name: /return to base/i,
    });
    expect(homeLink.getAttribute('href')).toBe('/');
  });

  it('has contact link', () => {
    render(<NotFound />);

    const contactLink = screen.getByRole('link', {
      name: /report issue/i,
    });
    expect(contactLink.getAttribute('href')).toBe('/contact');
  });
});
