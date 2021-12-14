import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { Post } from "~components/blog/interface"
import { serialize } from "next-mdx-remote/serialize"

import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeKatex from "rehype-katex"
import rehypeToc from "rehype-toc"
import rehypeCustomEmoji from "rehype-custom-emoji";

import remarkImages from "remark-images"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import remarkFootnote from "remark-footnotes"
import { emojis } from "~utils/emoji"

export const POSTS_PATH = path.join(process.cwd(), "posts")

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

export const getAllPosts = (): Post[] =>
  postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { content, data } = matter(source)
      return { content, data, filePath } as Post
    })
    .sort((a, b) => (new Date(a.data.date) > new Date(b.data.date) ? -1 : 1))

export const mdxSerialize = (content: string, data: { [key: string]: any }) =>
  serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkMath,
        remarkImages,
        remarkGfm,
        [remarkFootnote, { inlineNotes: true }],
        [
          require("remark-prism"),
          {
            plugins: ["line-numbers", "diff-highlight"],
          },
        ],
      ],
      rehypePlugins: [
        rehypeKatex,
        rehypeSlug,
        rehypeToc,
        rehypeAutolinkHeadings,
        [rehypeCustomEmoji, { emojis }],
      ],
    },
    scope: data,
  })
