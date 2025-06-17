import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-900/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-green-800/5 via-transparent to-green-800/5" />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* ASCII Art Style 404 */}
        <div className="font-mono text-green-400 mb-8">
          <pre className="text-lg sm:text-2xl md:text-4xl leading-tight">
            {`
 ██╗  ██╗ ██████╗ ██╗  ██╗
 ██║  ██║██╔═████╗██║  ██║
 ███████║██║██╔██║███████║
 ╚════██║████╔╝██║╚════██║
      ██║╚██████╔╝     ██║
      ╚═╝ ╚═════╝      ╚═╝
`}
          </pre>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 text-green-400">
          ACCESS DENIED
        </h1>

        <div className="text-lg md:text-xl mb-8 space-y-2">
          <p className="text-green-300">
            <span className="text-red-400">[ERROR]</span> Resource not found in
            secure perimeter
          </p>
          <p className="text-green-500 font-mono text-sm">
            Status: 404 | Protocol: HTTPS | Security: ACTIVE
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-green-200">
            The requested resource has been moved to a secure location or does
            not exist.
          </p>
          <p className="text-green-300 text-sm">
            All access attempts are logged and monitored for security purposes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="cyber-button bg-green-900/20 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 px-8 py-3 rounded-lg font-mono text-lg"
          >
            → RETURN TO BASE
          </Link>

          <Link
            href="/contact"
            className="cyber-button bg-transparent border-green-600 text-green-600 hover:bg-green-600 hover:text-black transition-all duration-300 px-8 py-3 rounded-lg font-mono text-lg"
          >
            → REPORT ISSUE
          </Link>
        </div>

        {/* Security Notice */}
        <div className="mt-12 p-4 border border-green-800 rounded-lg bg-green-900/10">
          <p className="text-green-500 text-sm font-mono">
            <span className="text-yellow-400">[SECURITY NOTICE]</span>
            This incident has been logged. Unauthorized access attempts are
            monitored and may be reported to relevant authorities.
          </p>
        </div>
      </div>
    </div>
  );
}
