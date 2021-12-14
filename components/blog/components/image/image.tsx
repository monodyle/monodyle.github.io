import s from "./image.module.css"

interface Props {
  title: string
  src: string
  className?: string
  [key: string]: string | undefined
}

export const Image = (props: Props) => {
  const { title, src, className, ...rest } = props
  const classList = className
    ?.split(" ")
    .map((name) => s[name])
    .join(" ")

  return (
    <figure className={classList}>
      <img {...rest} alt={title} src={src} data-src={src} className={s.image} />
      {title && <figcaption className={s.caption}>{title}</figcaption>}
    </figure>
  )
}
