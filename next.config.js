const nextTranslate = require('next-translate');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPlugins = require('next-compose-plugins');
// next.js configuration
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = withPlugins([
  [nextTranslate],
  [withBundleAnalyzer],
], nextConfig)