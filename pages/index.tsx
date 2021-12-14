import { Post } from "~components/blog/interface"
import { Introduction } from "~components/home/introduction/introduction"
import { Posts } from "~components/home/posts/posts"
import { Layout } from "~components/layout/layout"
import SEO, { CONFIG } from "~components/seo/seo"
import { getAllPosts } from "~utils/mdx"
import s from "./index.module.css"

interface Props {
  posts: Post[]
}

export default function Index(props: Props) {
  return (
    <Layout>
      <SEO
        title={CONFIG.title}
        description={CONFIG.excerpt}
        image={CONFIG.image}
        slug="/"
      />
      <main className={s.container}>
        <Introduction />
        <Posts posts={props.posts} />
      </main>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts: posts.slice(0, 3) } }
}
