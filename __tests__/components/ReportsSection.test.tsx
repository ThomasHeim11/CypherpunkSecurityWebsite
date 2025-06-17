import { render, screen } from '@testing-library/react';
import ReportsSection from '../../components/ReportsSection';

describe('ReportsSection Component', () => {
  it('renders reports content correctly', () => {
    render(<ReportsSection />);

    // Use getAllByText for elements that appear multiple times and check count
    const reportsElements = screen.getAllByText((content, element) => {
      return (
        element?.textContent?.includes('Security Assessment Reports') || false
      );
    });
    expect(reportsElements.length).toBeGreaterThan(0);
  });
});
