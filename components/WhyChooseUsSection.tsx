import { Shield, Zap, Users, Award } from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-neon-green">Our Security</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Rigorous methodology and unwavering commitment to security
            excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: 'Rigorous Methodology',
              description:
                'Systematic security analysis combining automated tools with expert manual review',
            },
            {
              icon: Zap,
              title: 'Efficient Process',
              description:
                'Streamlined audit workflow designed for thorough analysis without delays',
            },
            {
              icon: Users,
              title: 'Expert Team',
              description:
                'Security researchers with deep blockchain and smart contract expertise',
            },
            {
              icon: Award,
              title: 'Quality Focus',
              description:
                'Commitment to delivering exceptional audit quality and detailed reporting',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass-effect border border-neon-green/20 hover:border-neon-green/40 p-8 rounded-xl text-center group transition-all duration-300 hover:shadow-cyber"
            >
              <feature.icon className="h-12 w-12 text-neon-green mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
