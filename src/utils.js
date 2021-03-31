import fs from "fs"
import path from "path"
import remarkImages from "remark-images"
import remarkMath from "remark-math"
import rehypeSlug from "rehype-slug"
import rehypeShiki from "rehype-shiki"
import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import { emojis } from "./config"

const root = process.cwd()

export async function getFiles(dirname) {
  return fs.readdirSync(path.join(root, dirname))
}

export async function getFileBySlug(dirname, slug, components) {
  const source = fs.readFileSync(
    path.join(root, dirname, `${slug}.mdx`),
    "utf8",
  )

  const { data, content } = matter(source)

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeShiki, { theme: path.join(root, "src", "code-theme.json") }],
      ],
      remarkPlugins: [remarkImages, remarkMath],
    },
  })

  return {
    mdxSource,
    frontMatter: { ...data, slug },
  }
}

export async function getFrontMatters(dirname) {
  const files = await getFiles(dirname)
  return files.reduce((frontmatters, filename) => {
    const source = fs.readFileSync(path.join(root, dirname, filename), "utf8")

    const slug = filename.replace(/.mdx/, "")
    const { data } = matter(source)

    return frontmatters.concat({ ...data, slug })
  }, [])
}

export const emojiPattern = /:([\w-_]+):/g

export const emojiParse = (content) => {
  let result = ""
  while ((result = emojiPattern.exec(content))) {
    if (emojis[result[1]])
      content = content.replace(
        result[0],
        `<img src="/assets/emoji/${emojis[result[1]]}" class="emoji" />`,
      )
  }
  return content
}
