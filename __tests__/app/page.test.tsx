import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../../app/page';

// Mock all the components
jest.mock('../../components/Navigation', () => {
  return function MockNavigation({
    onRequestAudit,
  }: {
    onRequestAudit: () => void;
  }) {
    return <button onClick={onRequestAudit}>Request Audit</button>;
  };
});

jest.mock('../../components/HeroSection', () => {
  return function MockHeroSection({
    onRequestAudit,
  }: {
    onRequestAudit: () => void;
  }) {
    return (
      <div>
        Hero Section <button onClick={onRequestAudit}>Hero Request</button>
      </div>
    );
  };
});

jest.mock('../../components/ServicesSection', () => {
  return function MockServicesSection() {
    return <div>Services Section</div>;
  };
});

jest.mock('../../components/ProcessSection', () => {
  return function MockProcessSection() {
    return <div>Process Section</div>;
  };
});

jest.mock('../../components/WhyChooseUsSection', () => {
  return function MockWhyChooseUsSection() {
    return <div>Why Choose Us Section</div>;
  };
});

jest.mock('../../components/AboutSection', () => {
  return function MockAboutSection() {
    return <div>About Section</div>;
  };
});

jest.mock('../../components/ReportsSection', () => {
  return function MockReportsSection() {
    return <div>Reports Section</div>;
  };
});

jest.mock('../../components/CTASection', () => {
  return function MockCTASection({
    onRequestAudit,
  }: {
    onRequestAudit: () => void;
  }) {
    return (
      <div>
        CTA Section <button onClick={onRequestAudit}>CTA Request</button>
      </div>
    );
  };
});

jest.mock('../../components/Footer', () => {
  return function MockFooter() {
    return <div>Footer</div>;
  };
});

jest.mock('../../components/TerminalBackground', () => {
  return function MockTerminalBackground() {
    return <div>Terminal Background</div>;
  };
});

// Mock the URL utilities
const mockGetFormUrl = jest.fn();
jest.mock('../../lib/urls', () => ({
  getFormUrl: () => mockGetFormUrl(),
}));

describe('Home Page', () => {
  beforeEach(() => {
    global.open = jest.fn();
    mockGetFormUrl.mockReturnValue('https://form.typeform.com/to/test');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all sections correctly', () => {
    render(<Home />);

    expect(screen.getByText('Hero Section')).toBeInTheDocument();
    expect(screen.getByText('Services Section')).toBeInTheDocument();
    expect(screen.getByText('Process Section')).toBeInTheDocument();
    expect(screen.getByText('Why Choose Us Section')).toBeInTheDocument();
    expect(screen.getByText('About Section')).toBeInTheDocument();
    expect(screen.getByText('Reports Section')).toBeInTheDocument();
    expect(screen.getByText('CTA Section')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
    expect(screen.getByText('Terminal Background')).toBeInTheDocument();
  });

  it('opens audit form when request audit is triggered', () => {
    render(<Home />);

    const requestButton = screen.getByText('Request Audit');
    fireEvent.click(requestButton);

    expect(global.open).toHaveBeenCalledWith(
      'https://form.typeform.com/to/test',
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('handles audit form request when URL is not available', () => {
    // Mock getFormUrl to return #
    mockGetFormUrl.mockReturnValue('#');

    render(<Home />);

    const requestButton = screen.getByText('Request Audit');
    fireEvent.click(requestButton);

    // Should not call window.open when URL is #
    expect(global.open).not.toHaveBeenCalled();
  });

  it('handles multiple audit button clicks', () => {
    render(<Home />);

    const navigationButton = screen.getByText('Request Audit');
    const heroButton = screen.getByText('Hero Request');
    const ctaButton = screen.getByText('CTA Request');

    fireEvent.click(navigationButton);
    fireEvent.click(heroButton);
    fireEvent.click(ctaButton);

    expect(global.open).toHaveBeenCalledTimes(3);
  });
});
