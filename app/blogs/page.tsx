import Link from 'next/link'
import Header from './header'

import styles from './page.module.css'

const posts = [
  {
    title: 'Tránh mấy hàm vô dụng trong React bằng useReducer',
    slug: 'avoid-useless-hook',
    brief: 'Dạo này thấy lương thấp quá nên phải ngồi vẽ ra nhiều thứ để được tăng lương...',
    tags: ['frontend', 'react'],
    date: 'Dec 05, 2022',
  },
  {
    title: 'React dạo này cứ dở hơi thế nào ý',
    slug: 'react-sicks',
    brief: 'Nhưng mà còn hái ra tiền thì vẫn phải làm thôi =))))',
    tags: ['frontend', 'react'],
    date: 'Aug 29, 2022',
  },
]

export default function Blog() {
  return (
    <>
      <Header />
      <div className={styles.posts}>
        {posts.map(value => (
          <Link href={`/blogs/${value.slug}`} key={value.slug}>
            <div className={styles.post}>
              <div className={styles.meta}>
                <span className={styles.date}>{value.date}</span>
                <div className={styles.tags}>
                  {value.tags.map(tag => (
                    <span className={styles.tag}>#{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.title}>{value.title}</div>
              <p className={styles.brief}>{value.brief}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
