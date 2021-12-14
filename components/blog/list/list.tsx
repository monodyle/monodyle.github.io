import { Post } from "../interface"
import Link from "next/link"
import s from "./list.module.css"

interface Props {
  posts: Post[]
}

export const BlogList = (props: Props) => (
  <div className={s.container}>
    {props.posts?.map((post, index) => (
      <div className={s.post} key={index}>
        <div className={s.meta}>
          <span className={s.date}>{post.data.date}</span>
          {post.data.tags?.map((tag, index) => (
            <span className={s.tag} key={index}>
              {tag}
            </span>
          ))}
        </div>
        <Link
          as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
          href="/blog/[slug]"
        >
          <a className={[s.title, "rainbown"].join(" ")}>{post.data.title}</a>
        </Link>
        <div className={s.excerpt}>{post.data.excerpt}</div>
      </div>
    ))}
  </div>
)
