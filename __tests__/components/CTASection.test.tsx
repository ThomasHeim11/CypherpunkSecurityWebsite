import { render, screen, fireEvent } from '@testing-library/react';
import CTASection from '../../components/CTASection';

describe('CTASection Component', () => {
  it('renders CTA content correctly', () => {
    const mockOnRequestAudit = jest.fn();
    render(<CTASection onRequestAudit={mockOnRequestAudit} />);

    // Use getAllByText for elements that appear multiple times and take the first one
    const strengthenElements = screen.getAllByText((content, element) => {
      return element?.textContent?.includes('Ready to Strengthen') || false;
    });
    expect(strengthenElements.length).toBeGreaterThan(0);

    expect(screen.getByText(/start your security audit/i)).not.toBeNull();
  });

  it('calls onRequestAudit when button is clicked', () => {
    const mockOnRequestAudit = jest.fn();
    render(<CTASection onRequestAudit={mockOnRequestAudit} />);

    const button = screen.getByText(/start your security audit/i);
    fireEvent.click(button);

    expect(mockOnRequestAudit).toHaveBeenCalledTimes(1);
  });
});
