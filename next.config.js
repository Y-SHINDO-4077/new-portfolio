/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //swcMinify: true,
  // images: {
  //   domains: ['images.microcms-assets.io'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  // experimental: {
  //   optimizeFonts: true,
  // },
}

module.exports = nextConfig
