import { Shield, Code2, Search } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: 'Smart Contract Audits',
      description:
        'Comprehensive security analysis of smart contracts with detailed vulnerability assessment and remediation guidance.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-neon-green">Security Service</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional smart contract security audits to protect your digital
            assets and ensure code integrity.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-effect border border-neon-green/20 hover:border-neon-green/40 p-12 rounded-xl group transition-all duration-300 hover:shadow-cyber text-center">
            <Shield className="h-16 w-16 text-neon-green mb-8 group-hover:scale-110 transition-transform duration-300 mx-auto" />
            <h3 className="text-2xl font-bold text-white mb-6">
              Smart Contract Audits
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Comprehensive security analysis of smart contracts with detailed
              vulnerability assessment and remediation guidance. We combine
              automated analysis tools with expert manual review to identify
              security issues, logic flaws, and potential attack vectors.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center">
                <Code2 className="h-5 w-5 text-neon-green mr-2" />
                <span className="text-gray-300">Code Review</span>
              </div>
              <div className="flex items-center justify-center">
                <Search className="h-5 w-5 text-neon-green mr-2" />
                <span className="text-gray-300">Vulnerability Analysis</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="h-5 w-5 text-neon-green mr-2" />
                <span className="text-gray-300">Security Report</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
