import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
  },
  // Multi-site support via environment variable
  env: {
    SITE_BRAND: process.env.SITE_BRAND || 'security',
  },
}

export default nextConfig
