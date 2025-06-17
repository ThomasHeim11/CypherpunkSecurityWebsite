'use client';

import Logo from './Logo';
import { getLinkedInUrl, getXUrl } from '../lib/urls';

export default function Footer() {
  const openSocialLink = (platform: 'linkedin' | 'x') => {
    const url = platform === 'linkedin' ? getLinkedInUrl() : getXUrl();
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="glass-effect">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-4">
            <Logo className="h-8 w-8 mr-2" />
            <span className="text-lg font-bold text-white">
              CypherpunkSecurity
            </span>
          </div>

          <div className="flex items-center space-x-8 text-sm mb-4">
            <a
              href="#services"
              className="text-gray-300 hover:text-neon-green transition-colors"
            >
              Smart Contract Audits
            </a>
            <div className="w-1 h-1 bg-neon-green rounded-full"></div>
            <a
              href="#reports"
              className="text-gray-300 hover:text-neon-green transition-colors"
            >
              Security Reports
            </a>
          </div>

          {/* Cyberpunk Social Media Links */}
          <div className="flex items-center space-x-6 mb-4">
            {/* LinkedIn - Professional Network Icon */}
            <button
              onClick={() => openSocialLink('linkedin')}
              className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-neon-green/30 hover:border-neon-green/60 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              style={{
                clipPath:
                  'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
              }}
              aria-label="LinkedIn Professional Network"
            >
              {/* Circuit pattern background */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <defs>
                    <pattern
                      id="circuit-linkedin"
                      x="0"
                      y="0"
                      width="6"
                      height="6"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M0,3 L3,3 M3,0 L3,6 M3,3 L6,3"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        className="text-neon-green/40"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#circuit-linkedin)"
                  />
                </svg>
              </div>

              {/* Futuristic LinkedIn Icon */}
              <svg
                className="w-6 h-6 text-gray-300 group-hover:text-neon-green transition-all duration-300 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(0,255,148,0.8)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Modern geometric LinkedIn design */}
                <path
                  d="M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <rect x="6" y="9" width="2" height="7" fill="currentColor" />
                <circle cx="7" cy="7" r="1" fill="currentColor" />
                <path
                  d="M10 9v7h2v-3.5c0-1.5 1-2.5 2.5-2.5S17 11 17 12.5V16h2v-4.5c0-2.5-2-4.5-4.5-4.5-1.5 0-2.5.5-3.5 1.5V9h-1z"
                  fill="currentColor"
                />
              </svg>

              {/* Glitch effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-neon-green to-cyan-400 transition-opacity duration-200"></div>
            </button>

            {/* X (Twitter) - Network/Matrix Icon */}
            <button
              onClick={() => openSocialLink('x')}
              className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-neon-green/30 hover:border-neon-green/60 transition-all duration-300 transform hover:scale-110 hover:-rotate-3"
              style={{
                clipPath:
                  'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
              }}
              aria-label="X Social Network"
            >
              {/* Digital matrix background */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <defs>
                    <pattern
                      id="matrix-x"
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="2"
                        cy="2"
                        r="0.5"
                        fill="currentColor"
                        className="text-neon-green/40"
                      />
                      <path
                        d="M0,0 L4,4 M0,4 L4,0"
                        stroke="currentColor"
                        strokeWidth="0.3"
                        className="text-cyan-400/30"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#matrix-x)" />
                </svg>
              </div>

              {/* Futuristic X Icon */}
              <svg
                className="w-6 h-6 text-gray-300 group-hover:text-neon-green transition-all duration-300 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(0,255,148,0.8)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Modern geometric X design */}
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M8 8l8 8M16 8l-8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="8" r="1" fill="currentColor" />
                <circle cx="16" cy="8" r="1" fill="currentColor" />
                <circle cx="8" cy="16" r="1" fill="currentColor" />
                <circle cx="16" cy="16" r="1" fill="currentColor" />
              </svg>

              {/* Scan line effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent animate-pulse"></div>
              </div>
            </button>
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent mb-4"></div>

          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} CypherpunkSecurity. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
