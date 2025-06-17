/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Updated Turbopack configuration
  turbopack: {
    // Turbopack-specific settings can go here
  },
  // Remove deprecated devIndicators config
  // The dev overlay will use default settings

  // Additional development optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Suppress webpack warnings
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    return config;
  },
};

module.exports = nextConfig;
