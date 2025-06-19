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

        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            color: '#cccccc',
            fontFamily: 'monospace',
            marginBottom: '8px',
          }}
        >
          Professional smart contract security audits
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#cccccc',
            fontFamily: 'monospace',
            marginBottom: '40px',
          }}
        >
          for the decentralized future
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: '#00ff94',
              fontFamily: 'monospace',
              opacity: 0.9,
            }}
          >
            → Comprehensive vulnerability assessment
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#00ff94',
              fontFamily: 'monospace',
              opacity: 0.9,
            }}
          >
            → Expert security analysis
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#00ff94',
              fontFamily: 'monospace',
              opacity: 0.9,
            }}
          >
            → Detailed security reports
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

        {/* Decorative dots */}
        <div
          style={{
            position: 'absolute',
            top: '150px',
            right: '150px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#00ff94',
              borderRadius: '50%',
              opacity: 0.6,
            }}
          />
          <div
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#00ff94',
              borderRadius: '50%',
              opacity: 0.4,
            }}
          />
          <div
            style={{
              width: '4px',
              height: '4px',
              backgroundColor: '#00ff94',
              borderRadius: '50%',
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
