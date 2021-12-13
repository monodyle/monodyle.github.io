import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { h } from "hastscript"
import { findAndReplace } from "hast-util-find-and-replace"
import { Post } from "~components/blog/interface"
import { Plugin } from "unified"

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
