/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['**'],
    remotePatterns: [
      {
        hostname: '**',
      }
    ],
  }
};

export default nextConfig;
