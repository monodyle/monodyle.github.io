import Link from "next/link"
import { PostData } from "~components/blog/interface"
import s from "./header.module.css"

interface Props {
  post: PostData
  time: number
}

export const PostHeader = (props: Props) => (
  <div className={s.container}>
    <Link href="/blog">
      <a className={s.back}>&larr; Back</a>
    </Link>
    {props.post.image && (
      <div className={s.hero}>
        <img
          src={props.post.image}
          alt={props.post.title}
          className={s.image}
        />
      </div>
    )}
    {props.post.tags && (
      <div className={s.tags}>
        {props.post.tags.map((value, index) => (
          <span className={s.tag} key={index}>
            {value}
          </span>
        ))}
      </div>
    )}
    <h2 className={s.title}>{props.post.title}</h2>
    <div className={s.date}>
      {props.post.date} — {props.time} min{props.time === 1 ? "" : "s"} read
    </div>
  </div>
)
