import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onRequestAudit: () => void;
}

export default function CTASection({ onRequestAudit }: CTASectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="glass-effect border border-neon-green/20 rounded-2xl p-12 text-center hover:border-neon-green/40 transition-all duration-300 hover:shadow-cyber">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-neon-green">Strengthen</span> Your
            Protocol Security?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Partner with CypherpunkSecurity for comprehensive smart contract
            security assessments. We bring rigorous methodology and expert
            analysis to protect your protocol in the decentralized frontier.
          </p>

          <div className="cyber-separator mb-8"></div>

          <div className="flex justify-center">
            <button
              onClick={onRequestAudit}
              className="cyber-button flex items-center justify-center group"
            >
              Start Your Security Audit
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-gray-400 font-mono">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-terminal-blink"></div>
              Quality-First Approach
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-neon-blue rounded-full mr-2 animate-pulse"></div>
              Detailed Security Reports
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
