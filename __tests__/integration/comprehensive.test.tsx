/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';

// Import all components for comprehensive testing
import TerminalBackground from '../../components/TerminalBackground';
import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import ServicesSection from '../../components/ServicesSection';
import ProcessSection from '../../components/ProcessSection';
import AboutSection from '../../components/AboutSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import ReportsSection from '../../components/ReportsSection';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

// Mock external components
jest.mock('../../components/Logo', () => {
  return function MockLogo({ className }: { className?: string }) {
    return (
      <div className={className} data-testid="logo">
        Logo
      </div>
    );
  };
});

// Test the complete app structure
function FullApp() {
  const [auditRequests, setAuditRequests] = useState(0);

  const handleRequestAudit = () => {
    setAuditRequests(prev => prev + 1);
  };

  return (
    <div>
      <TerminalBackground />
      <Navigation onRequestAudit={handleRequestAudit} />
      <HeroSection onRequestAudit={handleRequestAudit} />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ReportsSection />
      <CTASection onRequestAudit={handleRequestAudit} />
      <Footer />
      <div data-testid="audit-count">{auditRequests}</div>
    </div>
  );
}

describe('Comprehensive Integration Tests', () => {
  it('renders all components without conflicts', () => {
    render(<FullApp />);

    // Check that key elements from each component are present
    // Use getAllByText for elements that appear multiple times
    const cypherpunkElements = screen.getAllByText('CypherpunkSecurity');
    expect(cypherpunkElements.length).toBeGreaterThan(0);

    expect(screen.getByText('Top-Tier')).not.toBeNull();
    expect(screen.getByText('Security Service')).not.toBeNull();
    const processElements = screen.getAllByText('Process');
    expect(processElements.length).toBeGreaterThan(0);
    const aboutElements = screen.getAllByText('About');
    expect(aboutElements.length).toBeGreaterThan(0);
    const reportsElements = screen.getAllByText('Reports');
    expect(reportsElements.length).toBeGreaterThan(0);
  });

  it('displays all section content correctly', () => {
    render(<FullApp />);

    // Hero section content
    expect(screen.getByText('Top-Tier')).not.toBeNull();

    // Use getAllByText for elements that appear multiple times
    const smartContractElements = screen.getAllByText('Smart Contract Audits');
    expect(smartContractElements.length).toBeGreaterThan(0);

    expect(screen.getByText('Code Review')).not.toBeNull();

    // Process section content (text may be split across elements)
    expect(screen.getByText(/documentation review/i)).not.toBeNull();
    expect(screen.getByText(/manual code review/i)).not.toBeNull();

    // About section content
    expect(screen.getByText('Deep Expertise')).not.toBeNull();
    expect(screen.getByText('Quality First')).not.toBeNull();

    // Why Choose Us content
    expect(screen.getByText('Rigorous Methodology')).not.toBeNull();
    expect(screen.getByText('Efficient Process')).not.toBeNull();

    // CTA section content
    expect(screen.getByText('Strengthen')).not.toBeNull();
  });

  it('handles audit request flow correctly', () => {
    render(<FullApp />);

    const auditCount = screen.getByTestId('audit-count');
    expect(auditCount.textContent).toBe('0');

    // Click hero section button
    const heroButton = screen.getByRole('button', {
      name: /request security audit/i,
    });
    fireEvent.click(heroButton);
    expect(auditCount.textContent).toBe('1');

    // Click navigation button (Request Audit)
    const navButton = screen.getByRole('button', { name: /request audit/i });
    fireEvent.click(navButton);
    expect(auditCount.textContent).toBe('2');
  });

  it('handles mobile menu interactions', () => {
    // Mock mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });

    render(<FullApp />);

    // Check mobile menu toggle button exists
    const menuToggle = screen.getByRole('button', {
      name: /toggle mobile menu/i,
    });
    expect(menuToggle).not.toBeNull();

    // Toggle mobile menu
    fireEvent.click(menuToggle);

    // Check mobile menu is open - look for mobile audit button
    const mobileAuditButtons = screen.getAllByRole('button', {
      name: /request security audit/i,
    });
    expect(mobileAuditButtons.length).toBeGreaterThan(1); // Should be at least desktop + mobile
  });

  it('maintains consistent theming and accessibility', () => {
    render(<FullApp />);

    // Check for accessibility attributes
    const menuToggle = screen.getByRole('button', {
      name: /toggle mobile menu/i,
    });
    expect(menuToggle.getAttribute('aria-label')).toBe('Toggle mobile menu');

    // Check for cyber-button styling consistency
    const buttons = screen.getAllByRole('button');
    const cyberButtons = buttons.filter(button =>
      button.className.includes('cyber-button')
    );
    expect(cyberButtons.length).toBeGreaterThan(0);
  });
});
