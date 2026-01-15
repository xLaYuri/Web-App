/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 300, 
  images: {
    domains: ["www.bungie.net", "cdn.discordapp.com"]
  },
  // This is the magic fix for "Module not found" errors
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        os: false,
        path: false,
        crypto: false,
        tty: false,
        process: false,
      };
    }
    return config;
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
