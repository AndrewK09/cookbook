/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["img.buzzfeed.com", 's3.amazonaws.com'],
  },
};

module.exports = nextConfig;
