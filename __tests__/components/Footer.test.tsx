import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Footer from '../../components/Footer';

// Mock the URL utilities
const mockGetLinkedInUrl = jest.fn();
const mockGetXUrl = jest.fn();

jest.mock('../../lib/urls', () => ({
  getLinkedInUrl: () => mockGetLinkedInUrl(),
  getXUrl: () => mockGetXUrl(),
}));

describe('Footer Component', () => {
  beforeEach(() => {
    global.open = jest.fn();
    mockGetLinkedInUrl.mockReturnValue('https://www.linkedin.com/company/test');
    mockGetXUrl.mockReturnValue('https://x.com/test');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders footer content correctly', () => {
    render(<Footer />);

    expect(screen.getByText('CypherpunkSecurity')).toBeInTheDocument();
    expect(screen.getByText('Smart Contract Audits')).toBeInTheDocument();
    expect(screen.getByText('Security Reports')).toBeInTheDocument();
    expect(
      screen.getByText(
        new RegExp(`© ${new Date().getFullYear()} CypherpunkSecurity`)
      )
    ).toBeInTheDocument();
  });

  it('opens LinkedIn when LinkedIn button is clicked', async () => {
    render(<Footer />);

    const linkedinButton = screen.getByLabelText(
      'LinkedIn Professional Network'
    );
    fireEvent.click(linkedinButton);

    await waitFor(() => {
      expect(global.open).toHaveBeenCalledWith(
        'https://www.linkedin.com/company/test',
        '_blank',
        'noopener,noreferrer'
      );
    });
  });

  it('opens X when X button is clicked', async () => {
    render(<Footer />);

    const xButton = screen.getByLabelText('X Social Network');
    fireEvent.click(xButton);

    await waitFor(() => {
      expect(global.open).toHaveBeenCalledWith(
        'https://x.com/test',
        '_blank',
        'noopener,noreferrer'
      );
    });
  });

  it('handles social link click when URL is not available', async () => {
    // Mock URLs to return #
    mockGetLinkedInUrl.mockReturnValue('#');
    mockGetXUrl.mockReturnValue('#');

    render(<Footer />);

    const linkedinButton = screen.getByLabelText(
      'LinkedIn Professional Network'
    );
    fireEvent.click(linkedinButton);

    // Should not call window.open when URL is #
    expect(global.open).not.toHaveBeenCalled();
  });

  it('renders social media icons correctly', () => {
    render(<Footer />);

    const linkedinButton = screen.getByLabelText(
      'LinkedIn Professional Network'
    );
    const xButton = screen.getByLabelText('X Social Network');

    expect(linkedinButton).toBeInTheDocument();
    expect(xButton).toBeInTheDocument();

    // Check that buttons contain SVG icons
    expect(linkedinButton.querySelector('svg')).toBeInTheDocument();
    expect(xButton.querySelector('svg')).toBeInTheDocument();
  });

  it('renders footer links correctly', () => {
    render(<Footer />);

    const servicesLink = screen.getByRole('link', {
      name: /smart contract audits/i,
    });
    const reportsLink = screen.getByRole('link', { name: /security reports/i });

    expect(servicesLink).toHaveAttribute('href', '#services');
    expect(reportsLink).toHaveAttribute('href', '#reports');
  });
});
