import { Game } from "~components/404/game"
import { Layout } from "~components/layout/layout"
import SEO, { CONFIG } from "~components/seo/seo"
import s from "./404.module.css"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404" description={CONFIG.excerpt} image={CONFIG.image} />
      <div className={s.container}>
        <h2 className={s.heading}>Oops! You found lost space...</h2>
        <Game />
        <div className={s.tips}>
          Use <span className={s.key}>&larr;</span> and{" "}
          <span className={s.key}>&rarr;</span> key to move your pad,
          <br />
          dont let the ball drop!!
          <br />
          <br />
          Try to escape
        </div>
      </div>
    </Layout>
  )
}
