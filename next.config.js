require("dotenv").config()
const nextMDX = require("@next/mdx")
const remarkImages = require("remark-images")
const remarkMath = require("remark-math")
const rehypeSlug = require("rehype-slug")
const rehypeKatex = require("rehype-katex")
const rehypeShiki = require("rehype-shiki")

const debug = process.env.NODE_ENV !== "production"

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeShiki, { theme: "./src/code-theme.json" }],
      rehypeKatex,
    ],
    remarkPlugins: [remarkImages, remarkMath],
  },
})

const nextConfig = {
  assetPrefix: !debug ? "/" : "",
  devIndicators: {
    autoPrerender: false,
  },
  pageExtensions: ["js", "md", "mdx"],
  poweredByHeader: false,
  env: {
    chatId: process.env.CHAT_ID,
    botToken: process.env.BOT_TOKEN,
  },
}

module.exports = withMDX(nextConfig)
