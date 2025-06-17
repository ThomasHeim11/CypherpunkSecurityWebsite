'use client';

import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onRequestAudit: () => void;
}

export default function HeroSection({ onRequestAudit }: HeroSectionProps) {
  return (
    <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            <span className="text-neon-green font-bold underline decoration-2 underline-offset-4">
              Top-Tier
            </span>
            <br />
            Smart Contract
            <br />
            <span className="text-neon-green">Security Audits</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
            Comprehensive audits for the decentralized future. Where code is
            law, trust is forged in security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <button
              onClick={onRequestAudit}
              className="cyber-button w-full sm:w-auto min-h-[48px] flex items-center justify-center"
            >
              Request Security Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#process"
              className="cyber-button w-full sm:w-auto min-h-[48px] flex items-center justify-center"
            >
              View Our Process
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
