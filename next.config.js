/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to generate static HTML files
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 300, 
  images: {
    unoptimized: true, // Required for static export
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
