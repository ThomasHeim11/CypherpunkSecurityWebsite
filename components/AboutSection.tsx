import { ABOUT_ITEMS } from '../constants/data';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-neon-green">About</span> CypherpunkSecurity
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A security-focused company dedicated to providing thorough smart
            contract audits with cypherpunk principles and rigorous methodology.
          </p>
        </div>

        <div className="glass-effect border border-neon-green/20 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Why Choose CypherpunkSecurity?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-neon-green mb-3">
                Deep Expertise
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our team of security engineers has extensive experience in
                blockchain security, smart contract vulnerabilities, and DeFi
                protocol analysis.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-neon-green mb-3">
                Quality First
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                We focus on delivering exceptional quality and thoroughness in
                every audit to ensure the highest security standards.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-neon-green mb-3">
                Cutting-Edge Tools
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We use advanced static analysis, formal verification, and custom
                fuzzing tools to ensure comprehensive security coverage.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-neon-green mb-3">
                Cypherpunk Principles
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We believe in transparency, decentralization, and the
                fundamental right to secure, privacy-preserving blockchain
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
