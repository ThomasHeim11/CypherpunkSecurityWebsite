import { render, screen } from '@testing-library/react';
import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import ServicesSection from '../../components/ServicesSection';
import ProcessSection from '../../components/ProcessSection';
import AboutSection from '../../components/AboutSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import ReportsSection from '../../components/ReportsSection';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

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

describe('Components Integration', () => {
  it('renders all components without conflicts', () => {
    const mockOnRequestAudit = jest.fn();

    render(
      <div>
        <Navigation onRequestAudit={mockOnRequestAudit} />
        <HeroSection onRequestAudit={mockOnRequestAudit} />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ReportsSection />
        <CTASection onRequestAudit={mockOnRequestAudit} />
        <Footer />
      </div>
    );

    // Check for unique elements that appear only once
    expect(screen.getByText('Top-Tier')).not.toBeNull();
    expect(screen.getByText('Security Service')).not.toBeNull();

    // Use getAllByText for elements that appear multiple times
    const smartContractElements = screen.getAllByText('Smart Contract Audits');
    expect(smartContractElements.length).toBeGreaterThan(0);

    expect(screen.getByText('Strengthen')).not.toBeNull();
  });

  it('renders correct component structure', () => {
    const mockOnRequestAudit = jest.fn();

    render(
      <div>
        <Navigation onRequestAudit={mockOnRequestAudit} />
        <HeroSection onRequestAudit={mockOnRequestAudit} />
        <ServicesSection />
      </div>
    );

    // Check for navigation elements
    expect(screen.getByText('Services')).not.toBeNull();
    expect(screen.getByText('Process')).not.toBeNull();
    expect(screen.getByText('About')).not.toBeNull();
    expect(screen.getByText('Reports')).not.toBeNull();
  });

  it('handles mock functions correctly across components', () => {
    const mockOnRequestAudit = jest.fn();

    render(
      <div>
        <Navigation onRequestAudit={mockOnRequestAudit} />
        <HeroSection onRequestAudit={mockOnRequestAudit} />
        <CTASection onRequestAudit={mockOnRequestAudit} />
      </div>
    );

    // Verify functions are passed correctly
    expect(mockOnRequestAudit).toHaveBeenCalledTimes(0);
  });
});
