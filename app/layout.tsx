import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ScrollToTop from '../components/ScrollToTop';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CypherpunkSecurity - Smart Contract Security Audits',
  description:
    'Professional smart contract security audits for the decentralized future. Comprehensive vulnerability assessment and security analysis.',
  keywords:
    'smart contract audit, blockchain security, DeFi security, solidity audit, cryptocurrency security, web3 security',
  authors: [{ name: 'CypherpunkSecurity' }],
  creator: 'CypherpunkSecurity',
  publisher: 'CypherpunkSecurity',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cypherpunksecurity.io',
    title: 'CypherpunkSecurity - Smart Contract Security Audits',
    description:
      'Professional smart contract security audits for the decentralized future.',
    siteName: 'CypherpunkSecurity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CypherpunkSecurity - Smart Contract Security Audits',
    description:
      'Professional smart contract security audits for the decentralized future.',
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  other: {
    // Security-focused meta tags
    referrer: 'strict-origin-when-cross-origin',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Viewport for mobile optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />

        {/* Security Meta Tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Prevent information disclosure */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />

        {/* DNS Prefetch Control */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />

        {/* Preconnect to external domains with integrity checking */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Enhanced Favicon Configuration for Brave Browser Compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link
          rel="icon"
          sizes="16x16"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          sizes="32x32"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          sizes="48x48"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Scroll Restoration - Always start at top */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.addEventListener('beforeunload', function() {
                window.scrollTo(0, 0);
              });
              window.addEventListener('load', function() {
                setTimeout(function() {
                  window.scrollTo(0, 0);
                }, 0);
              });
            `,
          }}
        />

        {/* Structured Data for Security Company */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CypherpunkSecurity',
              description:
                'Professional smart contract security audits and blockchain security services',
              url: 'https://cypherpunksecurity.io',
              logo: 'https://cypherpunksecurity.io/logo.svg',
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: 'English',
              },
              areaServed: 'Worldwide',
              serviceType: 'Smart Contract Security Audits',
            }),
          }}
        />
      </head>
      <body className={jetbrainsMono.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
