import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      hello, here the monody&#39;s space!
      <br />
      you can{' '}
      <a href="https://ko-fi.com/monodyle" target="_blank" rel="noopener noreferrer">
        buy me a coffee
      </a>{' '}
      if you feel enjoy this blog.
    </footer>
  )
}
