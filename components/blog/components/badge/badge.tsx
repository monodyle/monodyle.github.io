import { InformationIcon } from "~components/icons/icons"
import s from "./badge.module.css"

interface Props {
  children: string
}

export const Badge = (props: Props) => (
  <div className={s.container}>
    <InformationIcon className={s.icon} />
    <div className={s.content}>{props.children}</div>
  </div>
)
