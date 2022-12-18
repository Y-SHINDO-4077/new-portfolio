/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
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
  //presets: ["next/babel"],
  // swcMinify: false ,
  reactStrictMode: false,
  // env: {
  //   ENABLE_BASIC_AUTH: process.env.ENABLE_BASIC_AUTH,
  //   BASIC_AUTH_USER: process.env.BASIC_AUTH_USER,
  //   BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD,
  // },

}

module.exports = nextConfig
