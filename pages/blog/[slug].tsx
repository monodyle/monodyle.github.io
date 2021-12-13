import fs from "fs"
import { GetStaticPaths, GetStaticProps } from "next"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import path from "path"
import { PostData } from "~components/blog/interface"
import { Post } from "~components/blog/post/post"
import { Layout } from "~components/layout/layout"
import { postFilePaths, POSTS_PATH } from "~utils/mdx"
import { MDXRemoteSerializeResult } from "next-mdx-remote"

import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeKatex from "rehype-katex"
import { rehypeEmoji } from "~utils/mdx"

import remarkImages from "remark-images"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import remarkFootnote from "remark-footnotes"
import { emojis } from "~utils/emoji"

interface Props {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  post: PostData
}

const CONTENT_PAGE_CACHE_TIME = 60 * 60 * 24 * 7 // 7 days

export default function PostDetail(props: Props) {
  return (
    <Layout active="blog">
      <Post post={props.post} source={props.source} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { params } = context
    if (!params) return { notFound: true }
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
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
          rehypeAutolinkHeadings,
          [rehypeEmoji, { pattern: /:([\w-_]+):/g, emojis }],
        ],
      },
      scope: data,
    })

    return {
      revalidate: CONTENT_PAGE_CACHE_TIME,
      props: {
        source: mdxSource,
        post: data,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      notFound: true,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: "blocking",
  }
}
