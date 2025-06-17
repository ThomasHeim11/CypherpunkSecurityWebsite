/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Enhanced cyberpunk color palette
        cyber: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        neon: {
          green: '#00ff94',
          blue: '#00d9ff',
          purple: '#bd00ff',
          pink: '#ff0080',
          yellow: '#ffff00',
          orange: '#ff8800',
          red: '#ff0040',
        },
        // Pure black dark theme
        dark: {
          950: '#000000',
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#242424',
          500: '#2d2d2d',
          400: '#383838',
          300: '#484848',
          200: '#5a5a5a',
          100: '#6d6d6d',
        },
        // Matrix-inspired colors
        matrix: {
          green: '#00ff41',
          dark: '#001100',
          mid: '#003300',
        },
        // Terminal colors
        terminal: {
          green: '#00ff94',
          blue: '#00d9ff',
          yellow: '#ffff00',
          red: '#ff4444',
          orange: '#ff8800',
          purple: '#bd00ff',
          white: '#ffffff',
          gray: '#888888',
        },
      },
      fontFamily: {
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        sans: [
          '"JetBrains Mono"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        glow: 'glow 4s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 8s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 30s linear infinite',
        scan: 'scan 12s linear infinite',
        'blockchain-pulse': 'blockchain-pulse 4s ease-in-out infinite',
        'cyber-glow': 'cyber-glow 3s ease-in-out infinite alternate',
        'data-flow': 'data-flow 8s linear infinite',
        'terminal-blink': 'terminal-blink 1.2s step-start infinite',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 20px #00ff94, 0 0 30px #00ff94, 0 0 40px #00ff94',
          },
          '100%': {
            boxShadow:
              '0 0 30px #00ff94, 0 0 40px #00ff94, 0 0 50px #00ff94, 0 0 60px #00ff94',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-200px)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        scan: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'blockchain-pulse': {
          '0%, 100%': {
            opacity: '0.6',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
        },
        'cyber-glow': {
          '0%': {
            textShadow:
              '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '100%': {
            textShadow:
              '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
          },
        },
        'data-flow': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
        },
        'terminal-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid':
          'linear-gradient(rgba(0, 255, 148, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 148, 0.1) 1px, transparent 1px)',
        'matrix-bg':
          'radial-gradient(circle at 20% 80%, rgba(0, 255, 148, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 217, 255, 0.04) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(189, 0, 255, 0.03) 0%, transparent 50%)',
        'terminal-lines':
          'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 148, 0.03) 2px, rgba(0, 255, 148, 0.03) 4px)',
        'cyber-gradient':
          'linear-gradient(135deg, rgba(0, 255, 148, 0.1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 217, 255, 0.1) 100%)',
      },
      backgroundSize: {
        grid: '30px 30px',
        'grid-large': '50px 50px',
        'grid-small': '20px 20px',
      },
      boxShadow: {
        cyber:
          '0 0 20px rgba(0, 255, 148, 0.3), 0 0 40px rgba(0, 255, 148, 0.1)',
        'cyber-lg':
          '0 0 30px rgba(0, 255, 148, 0.4), 0 0 60px rgba(0, 255, 148, 0.2)',
        'neon-green': '0 0 20px #00ff94, 0 0 40px #00ff94, 0 0 60px #00ff94',
        'neon-blue': '0 0 20px #00d9ff, 0 0 40px #00d9ff, 0 0 60px #00d9ff',
        'neon-purple': '0 0 20px #bd00ff, 0 0 40px #bd00ff, 0 0 60px #bd00ff',
        terminal:
          '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 148, 0.1)',
      },
      blur: {
        xs: '2px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
