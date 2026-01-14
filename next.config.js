/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.bungie.net", "cdn.discordapp.com"]
  },
  // This tells Vercel: "Ignore the code police and just build the website!"
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
