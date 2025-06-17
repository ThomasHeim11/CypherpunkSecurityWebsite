'use client';

import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import AboutSection from '../components/AboutSection';
import ReportsSection from '../components/ReportsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import TerminalBackground from '../components/TerminalBackground';
import { getFormUrl } from '../lib/urls';

export default function Home() {
  const openAuditForm = () => {
    const formUrl = getFormUrl();
    if (formUrl && formUrl !== '#') {
      window.open(formUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <main className="min-h-screen bg-dark-950 relative">
      {/* Terminal Background */}
      <TerminalBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation onRequestAudit={openAuditForm} />
        <HeroSection onRequestAudit={openAuditForm} />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <AboutSection />
        <ReportsSection />
        <CTASection onRequestAudit={openAuditForm} />
        <Footer />
      </div>
    </main>
  );
}
