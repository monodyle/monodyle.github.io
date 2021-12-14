import Head from "next/head"
import { Fragment } from "react"
import { CONFIG } from "../seo/seo"
import { ActiveMenuItem, Header } from "./header/header"
import { Footer } from "./footer/footer"
import s from "./layout.module.css"

interface Props {
  children: React.ReactNode
  title?: string
  active?: ActiveMenuItem
}

export const Layout = (props: Props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title || CONFIG.title}</title>
      </Head>
      <Header active={props.active} />
      <div className={s.container}>{props.children}</div>
      <Footer />
    </Fragment>
  )
}
