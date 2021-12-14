import Link from "next/link"
import { Post } from "../../blog/interface"
import s from "./posts.module.css"

interface Props {
  posts: Post[]
}

export const Posts = (props: Props) => (
  <div className={s.container}>
    <h3 className={s.heading}>Latest posts</h3>
    <ol className={s.posts}>
      {props.posts.map((post, index) => (
        <li className={s.post} key={index}>
          <div className={s.counter}>{("0" + (index + 1)).slice(-2)}</div>
          <div className={s.data}>
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
              <a className={[s.title, "rainbown"].join(" ")}>
                {post.data.title}
              </a>
            </Link>
          </div>
        </li>
      ))}
    </ol>
  </div>
)
