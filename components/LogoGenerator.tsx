'use client';

import Image from 'next/image';

interface LogoGeneratorProps {
  className?: string;
}

export default function LogoGenerator({
  className = 'h-8 w-8',
}: LogoGeneratorProps) {
  return (
    <div className={`${className} relative group cursor-pointer`}>
      {/* Green glow effect matching website theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-lg blur-sm opacity-50 group-hover:opacity-70 transition-all duration-300" />

      {/* Clean logo from public folder */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="CypherpunkSecurity Logo"
          width={32}
          height={32}
          className="w-full h-full object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300"
          priority
        />
      </div>
    </div>
  );
}
