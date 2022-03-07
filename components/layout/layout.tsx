import { Fragment } from "react"
import { ActiveMenuItem, Header } from "./header/header"
import { Footer } from "./footer/footer"
import s from "./layout.module.css"

interface Props {
  children: React.ReactNode
  active?: ActiveMenuItem
}

export const Layout = (props: Props) => {
  return (
    <Fragment>
      <Header active={props.active} />
      <div className={s.container}>{props.children}</div>
      <Footer />
    </Fragment>
  )
}
