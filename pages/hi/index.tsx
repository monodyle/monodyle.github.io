import { Fragment } from "react"
import { Layout } from "~components/layout/layout"
import { Look } from "~components/look/look"
import s from "./hi.module.css"

const CONFIG = {
  email: "hi@minhle.space",
}

export const SOCIALS = {
  github: "https://github.com/monodyle",
  facebook: "https://fb.me/monodylh",
  twitter: "https://twitter.com/monodyle",
}

export default function HiPage() {
  return (
    <Layout active="hi">
      <div className={s.container}>
        <Look />
        <div className={s.info}>
          <h2 className={s.heading}>Having something to share? 👀</h2>
          <div>or want to have a chit chat, just drop me a message.</div>
          <div className={s.break} />
          <div className={s.emailLabel}>email ✉️</div>
          <a
            href={`mailto:${CONFIG.email}`}
            className={["rainbown", s.email].join(" ")}
          >
            {CONFIG.email}
          </a>
          <div className={s.break} />
          <div className={s.socialLabel}>social network 🤖</div>
          <div className={s.socials}>
            {Object.entries(SOCIALS).map(([page, url]) => (
              <Fragment key={page}>
                <a
                  href={url}
                  target="_blank"
                  className={["rainbown", s.socialLink].join(" ")}
                  rel="noreferrer"
                >
                  {page}
                </a>
                <div className={s.socialBreak} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
