import s from "./youtube.module.css"

interface Props {
  title?: string
  src: string
  width?: number
  height?: number
}

export const Youtube = (props: Props) => {
  return (
    <figure>
      <iframe
        width={props.width || 560}
        height={props.height || 315}
        src={props.src}
        title={props.title}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={s.iframe}
      />
      {props.title && (
        <figcaption className={s.caption}>{props.title}</figcaption>
      )}
    </figure>
  )
}
