/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 300, 
  images: {
    domains: ["www.bungie.net", "cdn.discordapp.com"]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // This tells Webpack to ignore Node-only modules during the Edge build
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        os: false,
        path: false,
        crypto: false,
        tty: false,
        process: false,
        child_process: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
