'use client'

import Link from 'next/link'
import cx from 'classnames'
import { usePathname } from 'next/navigation'
import {
  ChatBubbleBottomCenterTextIcon as Blog,
  BoltIcon as Snippet,
  PaintBrushIcon as Shot,
} from '@heroicons/react/24/outline'
import {
  ChatBubbleBottomCenterTextIcon as BlogActive,
  BoltIcon as SnippetActive,
  PaintBrushIcon as ShotActive,
} from '@heroicons/react/24/solid'
import styles from './navbar.module.css'

const links = [
  {
    path: '/blogs',
    label: 'Blog',
    icon: {
      normal: Blog,
      active: BlogActive,
    },
  },
  {
    path: '/shots',
    label: 'Shot',
    icon: {
      normal: Shot,
      active: ShotActive,
    },
  },
  {
    path: '/snippets',
    label: 'Snippet',
    icon: {
      normal: Snippet,
      active: SnippetActive,
    },
  },
]

export default function NavigationBar() {
  const pathname = usePathname()

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <img src="/assets/me.png" alt="logo" />
        <strong>monody</strong>
      </Link>
      <div className={styles.links}>
        {links.map(item => {
          const active = pathname.startsWith(item.path)
          const Icon = active ? item.icon.active : item.icon.normal
          return (
            <Link
              href={item.path}
              key={item.path}
              className={cx(styles.link, { [styles.active]: active })}
            >
              <Icon className={styles.icon} />
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
