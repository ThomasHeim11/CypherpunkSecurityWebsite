import { render, screen } from '@testing-library/react';
import ServicesSection from '../../components/ServicesSection';

describe('ServicesSection Component', () => {
  it('renders services content correctly', () => {
    render(<ServicesSection />);

    // Use getAllByText for elements that appear multiple times and check count
    const servicesElements = screen.getAllByText((content, element) => {
      return element?.textContent?.includes('Our Security Service') || false;
    });
    expect(servicesElements.length).toBeGreaterThan(0);

    expect(screen.getByText(/smart contract audit/i)).not.toBeNull();
    expect(screen.getByText(/code review/i)).not.toBeNull();
  });

  it('renders all service cards', () => {
    render(<ServicesSection />);

    const serviceCards = screen.getAllByText(/smart contract|security/i);
    expect(serviceCards.length).toBeGreaterThan(0);
  });
});
