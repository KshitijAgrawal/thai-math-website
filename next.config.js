/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    // Azure App Service compatibility
    experimental: {
      outputFileTracingRoot: undefined,
    }
  }
  
  module.exports = nextConfig