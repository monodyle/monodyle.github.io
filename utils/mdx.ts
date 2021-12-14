import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { h } from "hastscript"
import { findAndReplace } from "hast-util-find-and-replace"
import { Post } from "~components/blog/interface"
import { Plugin } from "unified"
import { serialize } from "next-mdx-remote/serialize"

import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeKatex from "rehype-katex"
import rehypeToc from "rehype-toc"

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

interface RehypeEmojiOptions {
  // Record<emoji_name, image_path>
  emojis: Record<string, string>
}

/**
 * Plugin to transform `:emoji:` to image
 * @type {import('unified').Plugin<[Options?]|void[], Root>}
 */
export const rehypeEmoji: Plugin = ({ emojis }: RehypeEmojiOptions) => {
  return (tree: any) => {
    const replace_map: Record<string, any> = {}
    Object.entries(emojis).forEach(([code, path]) => {
      replace_map[`:${code}:`] = h("img", { src: path, className: "emoji" })
    })
    findAndReplace(tree, replace_map, { ignore: ["code"] })
  }
}

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
            plugins: ["autolinker", "line-numbers", "diff-highlight"],
          },
        ],
      ],
      rehypePlugins: [
        rehypeKatex,
        rehypeSlug,
        rehypeToc,
        rehypeAutolinkHeadings,
        [rehypeEmoji, { pattern: /:([\w-_]+):/g, emojis }],
      ],
    },
    scope: data,
  })
