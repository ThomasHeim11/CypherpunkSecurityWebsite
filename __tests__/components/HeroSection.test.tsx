import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from '../../components/HeroSection';

describe('HeroSection Component', () => {
  it('renders hero content correctly', () => {
    const mockOnRequestAudit = jest.fn();
    render(<HeroSection onRequestAudit={mockOnRequestAudit} />);

    // Check for main title elements
    expect(screen.getByText(/top-tier/i)).not.toBeNull();
    expect(screen.getByText(/smart contract/i)).not.toBeNull();
    expect(screen.getByText(/security audits/i)).not.toBeNull();
  });

  it('has working audit button', () => {
    const mockOnRequestAudit = jest.fn();
    render(<HeroSection onRequestAudit={mockOnRequestAudit} />);

    const auditButton = screen.getByRole('button', {
      name: /request security audit/i,
    });
    expect(auditButton).not.toBeNull();

    fireEvent.click(auditButton);
    expect(mockOnRequestAudit).toHaveBeenCalledTimes(1);
  });

  it('has working process link', () => {
    const mockOnRequestAudit = jest.fn();
    render(<HeroSection onRequestAudit={mockOnRequestAudit} />);

    // It's a link, not a button
    const processLink = screen.getByRole('link', {
      name: /view our process/i,
    });
    expect(processLink).not.toBeNull();
    expect(processLink.getAttribute('href')).toBe('#process');
  });
});
