import { Balancer } from 'react-wrap-balancer'

import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>bio</h3>
        <div className={styles.description}>
          <p>
            <Balancer>
              my name is Minh &quot;Monody&quot; Le Hong. just a guy tends to be handsome gradually
              over the years…
            </Balancer>
          </p>
          <p>
            <Balancer>
              i was born a child of the mountains and forests, raised on the land of sunny which
              named Central Highlands. should be i had to grow vegetables and chickens, but now I go
              coding and design.
            </Balancer>
          </p>
        </div>
      </div>
      <div className={styles.avatar}>
        <img src="https://avatars.githubusercontent.com/u/30283022" alt="avatar" />
      </div>
    </div>
  )
}
