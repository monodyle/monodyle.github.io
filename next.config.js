require("dotenv").config()

const nextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      }
    }
    return config
  },
}

module.exports = nextConfig
