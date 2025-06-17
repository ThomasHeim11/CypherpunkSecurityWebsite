import { render, screen } from '@testing-library/react';
import AboutSection from '../../components/AboutSection';

describe('AboutSection Component', () => {
  it('renders about content correctly', () => {
    render(<AboutSection />);

    // Use getAllByText for elements that appear multiple times and check count
    const aboutElements = screen.getAllByText((content, element) => {
      return (
        element?.textContent?.includes('About CypherpunkSecurity') || false
      );
    });
    expect(aboutElements.length).toBeGreaterThan(0);
  });

  it('renders about items from constants', () => {
    render(<AboutSection />);

    // Check that ABOUT_ITEMS are rendered
    const aboutItems = screen.getAllByText(
      /smart contract|security|blockchain/i
    );
    expect(aboutItems.length).toBeGreaterThan(0);
  });
});
