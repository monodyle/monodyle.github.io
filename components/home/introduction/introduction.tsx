import { Look } from "../../look/look"
import s from "./introduction.module.css"

export const Introduction = () => {
  return (
    <div className={s.container}>
      <div className={s.entry}>
        <div className={s.detail}>
          <h2 className={s.name}>Monody Le ✌️</h2>
          <p className={s.info}>
            Software Engineer at <strong>Sky Mavis</strong>
          </p>
          <p className={s.info}>
            My name is <strong>Minh &quot;Monody&quot; Le Hong</strong>.
            <br />
            Just a guy tends to be handsome gradually over the years…
          </p>
          <p className={s.info}>
            I was born a child of the mountains and forests, raised on the land
            of sunny which named Central Highlands. Should be I had to grow
            vegetables and chickens, but now I go coding and design.
          </p>
        </div>
        <Look />
      </div>

      <div className={s.illustration}>
        <div className={s.ground} />
        <div className={s.cloud} />
        <div className={s.sun} />
        <div className={s.me}>🌝</div>
      </div>
    </div>
  )
}
