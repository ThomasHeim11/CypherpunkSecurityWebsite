'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavigationProps {
  onRequestAudit: () => void;
}

export default function Navigation({ onRequestAudit }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileAuditRequest = () => {
    closeMobileMenu();
    onRequestAudit();
  };

  return (
    <>
      <nav className="fixed w-full z-50 glass-effect">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 sm:space-x-8">
              <Link
                href="/"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 group"
                aria-label="CypherpunkSecurity - Go to homepage"
              >
                <div className="relative">
                  <Logo className="h-10 w-10 sm:h-12 sm:w-12 text-neon-green group-hover:text-neon-green/90 transition-colors" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-green rounded-full animate-terminal-blink group-hover:bg-neon-green/90"></div>
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                    CypherpunkSecurity
                  </span>
                  <div className="text-xs text-neon-green uppercase tracking-wider font-mono hidden sm:block group-hover:text-neon-green/90 transition-colors">
                    Smart Contract Audits
                  </div>
                </div>
              </Link>
              <nav className="hidden lg:flex space-x-8">
                <a
                  href="#services"
                  className="text-gray-300 hover:text-neon-green transition-colors font-medium font-mono relative group"
                >
                  Services
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a
                  href="#process"
                  className="text-gray-300 hover:text-neon-green transition-colors font-medium font-mono relative group"
                >
                  Process
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-neon-green transition-colors font-medium font-mono relative group"
                >
                  About
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a
                  href="#reports"
                  className="text-gray-300 hover:text-neon-green transition-colors font-medium font-mono relative group"
                >
                  Reports
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full"></div>
                </a>
              </nav>
            </div>
            <div className="hidden sm:flex items-center">
              <button
                onClick={onRequestAudit}
                className="security-badge hover:shadow-cyber transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,148,0.6),0_0_40px_rgba(0,255,148,0.3)] hover:border-neon-green/80 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm"
              >
                Request Audit
              </button>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden p-2 text-gray-300 hover:text-neon-green transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeMobileMenu}
          ></div>

          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] glass-effect border-l border-neon-green/20 transform transition-transform duration-300">
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="flex flex-col space-y-6">
                <a
                  href="#services"
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-neon-green transition-colors font-medium font-mono text-lg py-3 border-b border-gray-800 hover:border-neon-green/30"
                >
                  Services
                </a>
                <a
                  href="#process"
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-neon-green transition-colors font-medium font-mono text-lg py-3 border-b border-gray-800 hover:border-neon-green/30"
                >
                  Process
                </a>
                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-neon-green transition-colors font-medium font-mono text-lg py-3 border-b border-gray-800 hover:border-neon-green/30"
                >
                  About
                </a>
                <a
                  href="#reports"
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-neon-green transition-colors font-medium font-mono text-lg py-3 border-b border-gray-800 hover:border-neon-green/30"
                >
                  Reports
                </a>
              </nav>

              <div className="mt-8">
                <button
                  onClick={handleMobileAuditRequest}
                  className="w-full security-badge hover:shadow-cyber transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,148,0.6),0_0_40px_rgba(0,255,148,0.3)] hover:border-neon-green/80 px-6 py-4 text-sm"
                >
                  Request Security Audit
                </button>
              </div>

              <div className="mt-auto pb-8">
                <div className="text-center">
                  <div className="text-xs text-neon-green uppercase tracking-wider font-mono mb-2">
                    Smart Contract Audits
                  </div>
                  <div className="text-xs text-gray-400">
                    Professional Security Analysis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
