import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Consistent URL structure - no trailing slashes
  trailingSlash: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
