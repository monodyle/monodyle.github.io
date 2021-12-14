import fs from "fs"
import { GetStaticPaths, GetStaticProps } from "next"
import matter from "gray-matter"
import path from "path"
import { PostData } from "~components/blog/interface"
import { Post } from "~components/blog/post/post"
import { Layout } from "~components/layout/layout"
import { mdxSerialize, postFilePaths, POSTS_PATH } from "~utils/mdx"
import { MDXRemoteSerializeResult } from "next-mdx-remote"

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params === undefined) return { notFound: true }
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)
  const mdxSource = await mdxSerialize(content, data)

  return {
    revalidate: CONTENT_PAGE_CACHE_TIME,
    props: {
      source: mdxSource,
      post: data,
    },
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
