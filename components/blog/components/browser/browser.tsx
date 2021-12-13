import s from "./browser.module.css"

interface Props {
  title: string
  src: string
  height?: number
}

export const Browser = (props: Props) => (
  <div className={s.container}>
    <div className={s.header}>
      <div className={s.title}>{props.title}</div>
      <div className={s.url}>{props.src}</div>
    </div>
    <div className={s.page}>
      <iframe
        src={props.src}
        className={s.frame}
        height={props.height || 360}
      />
    </div>
  </div>
)
