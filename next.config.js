/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
