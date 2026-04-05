import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bethy-ai-landing.vercel.app',
      },
    ],
  },
};

export default nextConfig;
