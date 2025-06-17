'use client';

export default function TerminalBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 148, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 148, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 255, 148, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 217, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
