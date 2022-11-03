/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    amp: {
      skipValidation: true,
    },
  },
};

module.exports = nextConfig;
