/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Cloudflare Pages deployment
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
