import { Lock } from 'lucide-react';

export default function ReportsSection() {
  return (
    <section id="reports" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="text-neon-green">Security Assessment Reports</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Transparent security assessment reports and findings from our audits.
        </p>

        <div className="glass-effect border border-neon-green/20 p-12 rounded-2xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Reports Coming Soon
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Transparent security assessment reports will be published here as we
            complete audits and receive client approval for disclosure.
          </p>
        </div>
      </div>
    </section>
  );
}
