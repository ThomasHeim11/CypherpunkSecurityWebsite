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
  // Webpack customizations for production only
  webpack: (config, { dev, isServer }) => {
    // Only apply custom devtool in production for smaller bundles
    if (!dev && !isServer) {
      config.devtool = false; // Disable source maps in production for security
    }
    // Let Next.js use optimal devtool in development
    return config;
  },
};

module.exports = nextConfig;
