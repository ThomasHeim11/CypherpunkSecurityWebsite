import { render, screen } from '@testing-library/react';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';

describe('WhyChooseUsSection Component', () => {
  it('renders why choose us content correctly', () => {
    render(<WhyChooseUsSection />);

    // Use getAllByText for elements that appear multiple times and check count
    const whyChooseElements = screen.getAllByText((content, element) => {
      return element?.textContent?.includes('Why Choose Our Security') || false;
    });
    expect(whyChooseElements.length).toBeGreaterThan(0);

    // Use getAllByText for elements that appear multiple times
    expect(screen.getAllByText(/rigorous methodology/i).length).toBeGreaterThan(
      0
    );
    expect(screen.getByText(/efficient process/i)).not.toBeNull();
    expect(screen.getByText(/expert team/i)).not.toBeNull();
    expect(screen.getByText(/quality focus/i)).not.toBeNull();
  });
});
