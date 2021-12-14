/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/feed",
        destination: "/api/feed",
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/feed",
        headers: [{ key: "content-type", value: "text/xml" }],
      },
    ]
  },
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer(config)
