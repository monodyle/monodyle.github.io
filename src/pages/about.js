import hydrate from "next-mdx-remote/hydrate"
import Post from "components/blog/post"
import { getFileBySlug } from "utils"

export default function About({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource)
  return <Post metadata={frontMatter}>{content}</Post>
}

export async function getStaticProps() {
  const post = await getFileBySlug("posts", "about")

  return {
    props: post,
  }
}
