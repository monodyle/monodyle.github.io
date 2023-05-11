/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true
  }
}

const withMdx = require('@next/mdx')()
module.exports = withMdx(nextConfig)
