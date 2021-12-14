import s from "./scroll.module.css"

interface Props {
  percentage: number
}

export const PostScroll = (props: Props) => (
  <div className={s.container}>
    <div className={s.fill} style={{ height: `${props.percentage}%` }} />
  </div>
)
