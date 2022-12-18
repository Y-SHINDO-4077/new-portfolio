/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        
      },
    ],
  },
  swcMinify: false ,
  reactStrictMode: false,
}

module.exports = nextConfig
