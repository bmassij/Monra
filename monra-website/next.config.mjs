/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
  },
  env: {
    SITE_BRAND: process.env.SITE_BRAND || 'security',
  },
}

export default nextConfig
