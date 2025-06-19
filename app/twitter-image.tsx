import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'CypherpunkSecurity - Smart Contract Security Audits';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#000000',
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 255, 148, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(0, 255, 148, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          padding: '80px',
        }}
      >
        {/* Border */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '2px solid rgba(0, 255, 148, 0.6)',
          }}
        />

        {/* Logo/Shield */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'transparent',
              border: '3px solid #00ff94',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '30px',
            }}
          >
            <div
              style={{
                width: '30px',
                height: '30px',
                backgroundColor: '#00ff94',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#ffffff',
            fontFamily: 'monospace',
            marginBottom: '20px',
            lineHeight: 1.1,
          }}
        >
          CypherpunkSecurity
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '36px',
            color: '#00ff94',
            fontFamily: 'monospace',
            marginBottom: '40px',
          }}
        >
          Smart Contract Security Audits
        </div>

        {/* Description - Shorter for Twitter */}
        <div
          style={{
            fontSize: '24px',
            color: '#cccccc',
            fontFamily: 'monospace',
            marginBottom: '40px',
          }}
        >
          Professional smart contract security audits for the decentralized
          future
        </div>

        {/* Key Features - More compact for Twitter */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              color: '#00ff94',
              fontFamily: 'monospace',
              opacity: 0.9,
            }}
          >
            → Vulnerability Assessment
          </div>
          <div
            style={{
              fontSize: '18px',
              color: '#00ff94',
              fontFamily: 'monospace',
              opacity: 0.9,
            }}
          >
            → Security Analysis
          </div>
          <div
            style={{
              fontSize: '18px',
              color: '#00ff94',
              fontFamily: 'monospace',
              opacity: 0.9,
            }}
          >
            → Detailed Reports
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: '18px',
            color: '#888888',
            fontFamily: 'monospace',
          }}
        >
          https://cypherpunksecurity.io
        </div>

        {/* Twitter logo area */}
        <div
          style={{
            position: 'absolute',
            top: '120px',
            right: '120px',
            fontSize: '16px',
            color: '#00ff94',
            fontFamily: 'monospace',
            opacity: 0.6,
          }}
        >
          @CypherpunkSec
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
