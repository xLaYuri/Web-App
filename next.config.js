/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 1. Increase timeout to prevent the 60s crash you saw in the logs
  staticPageGenerationTimeout: 300, 
  images: {
    domains: ["www.bungie.net", "cdn.discordapp.com"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/raidhub",
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
