import { Post } from "~components/blog/interface"
import { BlogList } from "~components/blog/list/list"
import { Layout } from "~components/layout/layout"
import { getAllPosts } from "~utils/mdx"
import NodeCache from "node-cache"
import { GetStaticProps } from "next"
import SEO, { CONFIG } from "~components/seo/seo"

const CACHE_DURATION = 60 * 60 // 1 hour
const cache = new NodeCache({ stdTTL: CACHE_DURATION })

export default function BlogPage({ posts }: { posts: Post[] }) {
  return (
    <Layout active="blog">
      <SEO
        title="Blogs"
        description={CONFIG.excerpt}
        image={CONFIG.image}
        slug="/blog"
      />
      <BlogList posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let posts = cache.get<Post[]>("posts")
  if (!posts) {
    posts = getAllPosts()
    cache.set("posts", posts)
  }

  return {
    revalidate: CACHE_DURATION,
    props: { posts },
  }
}
