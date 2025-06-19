import { render, screen, fireEvent } from '@testing-library/react';
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

describe('Navigation Component', () => {
  const mockOnRequestAudit = jest.fn();

  beforeEach(() => {
    mockOnRequestAudit.mockClear();
  });

  it('renders navigation correctly', () => {
    render(<Navigation onRequestAudit={mockOnRequestAudit} />);

    expect(screen.getByText('CypherpunkSecurity')).toBeInTheDocument();
    expect(screen.getByText('Smart Contract Audits')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Process')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Reports')).toBeInTheDocument();
  });

  it('logo links to homepage correctly', () => {
    render(<Navigation onRequestAudit={mockOnRequestAudit} />);

    const logoLink = screen.getByRole('link', {
      name: /cypherpunksecurity - go to homepage/i,
    });

    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
    expect(logoLink).toHaveClass('group');
  });

  it('logo link contains both logo and company name', () => {
    render(<Navigation onRequestAudit={mockOnRequestAudit} />);

    const logoLink = screen.getByRole('link', {
      name: /cypherpunksecurity - go to homepage/i,
    });

    // Check that the link contains the logo
    expect(logoLink.querySelector('[data-testid="logo"]')).toBeInTheDocument();

    // Check that the link contains the company name
    expect(logoLink).toHaveTextContent('CypherpunkSecurity');
    expect(logoLink).toHaveTextContent('Smart Contract Audits');
  });

  it('calls onRequestAudit when desktop audit button is clicked', () => {
    render(<Navigation onRequestAudit={mockOnRequestAudit} />);

    const auditButton = screen.getByRole('button', {
      name: /request audit/i,
    });
    fireEvent.click(auditButton);

    expect(mockOnRequestAudit).toHaveBeenCalledTimes(1);
  });

  it('toggles mobile menu correctly', () => {
    render(<Navigation onRequestAudit={mockOnRequestAudit} />);

    const hamburgerButton = screen.getByRole('button', {
      name: /toggle mobile menu/i,
    });

    // Initially mobile menu should not be visible
    expect(
      screen.queryByRole('button', { name: /request security audit/i })
    ).not.toBeInTheDocument();

    // Open mobile menu
    fireEvent.click(hamburgerButton);
    expect(
      screen.getByRole('button', { name: /request security audit/i })
    ).toBeInTheDocument();

    // Close mobile menu by clicking hamburger again
    fireEvent.click(hamburgerButton);
    expect(
      screen.queryByRole('button', { name: /request security audit/i })
    ).not.toBeInTheDocument();
  });

  it('closes mobile menu when clicking on mobile links', () => {
    render(<Navigation onRequestAudit={mockOnRequestAudit} />);

    // Open mobile menu
    const hamburgerButton = screen.getByRole('button', {
      name: /toggle mobile menu/i,
    });
    fireEvent.click(hamburgerButton);

    // Get all Services links and find the mobile one
    const allServiceLinks = screen.getAllByText('Services');
    const mobileServiceLink = allServiceLinks.find(link =>
      link.closest('nav')?.className.includes('flex-col')
    );

    if (mobileServiceLink) {
      fireEvent.click(mobileServiceLink);
    }

    // Mobile menu should be closed
    expect(
      screen.queryByRole('button', { name: /request security audit/i })
    ).not.toBeInTheDocument();
  });

  it('handles mobile audit request properly', () => {
    render(<Navigation onRequestAudit={mockOnRequestAudit} />);

    // Open mobile menu
    const hamburgerButton = screen.getByRole('button', {
      name: /toggle mobile menu/i,
    });
    fireEvent.click(hamburgerButton);

    // Click mobile audit button
    const mobileAuditButton = screen.getByRole('button', {
      name: /request security audit/i,
    });
    fireEvent.click(mobileAuditButton);

    expect(mockOnRequestAudit).toHaveBeenCalledTimes(1);
    // Menu should be closed after clicking
    expect(
      screen.queryByRole('button', { name: /request security audit/i })
    ).not.toBeInTheDocument();
  });

  it('closes mobile menu when clicking backdrop', () => {
    render(<Navigation onRequestAudit={mockOnRequestAudit} />);

    // Open mobile menu
    const hamburgerButton = screen.getByRole('button', {
      name: /toggle mobile menu/i,
    });
    fireEvent.click(hamburgerButton);

    // Find and click the backdrop
    const backdrop = document.querySelector('.fixed.inset-0.bg-black\\/80');
    if (backdrop) {
      fireEvent.click(backdrop);
    }

    // Mobile menu should be closed
    expect(
      screen.queryByRole('button', { name: /request security audit/i })
    ).not.toBeInTheDocument();
  });

  it('shows correct icons in mobile menu button', () => {
    render(<Navigation onRequestAudit={mockOnRequestAudit} />);

    const hamburgerButton = screen.getByRole('button', {
      name: /toggle mobile menu/i,
    });

    // Check that button contains SVG
    expect(hamburgerButton.querySelector('svg')).toBeInTheDocument();
  });

  it('has proper navigation link attributes', () => {
    render(<Navigation onRequestAudit={mockOnRequestAudit} />);

    const servicesLink = screen.getAllByText('Services')[0].closest('a');
    const processLink = screen.getAllByText('Process')[0].closest('a');
    const aboutLink = screen.getAllByText('About')[0].closest('a');
    const reportsLink = screen.getAllByText('Reports')[0].closest('a');

    expect(servicesLink).toHaveAttribute('href', '#services');
    expect(processLink).toHaveAttribute('href', '#process');
    expect(aboutLink).toHaveAttribute('href', '#about');
    expect(reportsLink).toHaveAttribute('href', '#reports');
  });

  it('handles all mobile menu links correctly', () => {
    render(<Navigation onRequestAudit={mockOnRequestAudit} />);

    // Open mobile menu
    const hamburgerButton = screen.getByRole('button', {
      name: /toggle mobile menu/i,
    });
    fireEvent.click(hamburgerButton);

    // Test all mobile links
    const mobileLinks = ['Services', 'Process', 'About', 'Reports'];

    mobileLinks.forEach(linkText => {
      // Reopen menu for each test
      if (!screen.queryByRole('button', { name: /request security audit/i })) {
        fireEvent.click(hamburgerButton);
      }

      const allLinks = screen.getAllByText(linkText);
      const mobileLink = allLinks.find(link =>
        link.closest('nav')?.className.includes('flex-col')
      );

      if (mobileLink) {
        fireEvent.click(mobileLink);
        // Menu should close
        expect(
          screen.queryByRole('button', { name: /request security audit/i })
        ).not.toBeInTheDocument();
      }
    });
  });
});
