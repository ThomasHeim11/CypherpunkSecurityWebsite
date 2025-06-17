import { FileText, Search, Code, Shield } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Audit <span className="text-neon-green">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A systematic approach to identifying vulnerabilities and ensuring
            the highest security standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: FileText,
              title: '1. Documentation Review',
              description:
                'Analyze project specifications, whitepaper, and technical documentation.',
            },
            {
              icon: Code,
              title: '2. Manual Code Review',
              description:
                'Expert security engineers perform comprehensive line-by-line code analysis to identify vulnerabilities.',
            },
            {
              icon: Search,
              title: '3. Static Analysis, Formal Verification & Fuzz Testing',
              description:
                'Static analysis, formal verification, and fuzz testing to ensure comprehensive vulnerability coverage.',
            },
            {
              icon: Shield,
              title: '4. Security Report',
              description:
                'Comprehensive report with findings, recommendations, and remediation steps.',
            },
          ].map((step, index) => (
            <div
              key={index}
              className="glass-effect border border-neon-green/20 hover:border-neon-green/40 p-8 rounded-2xl text-center group transition-all duration-300 hover:shadow-cyber"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-neon-green/10 rounded-full mb-6 group-hover:bg-neon-green/20 transition-colors mx-auto">
                <step.icon className="h-8 w-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
