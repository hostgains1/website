import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Consistent URL structure - no trailing slashes
  trailingSlash: false,

  async headers() {
    return [
      {
        source: '/julian.jpg',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },

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
