"use client"

import Link from "next/link"
import cx from "classnames"
import { usePathname } from "next/navigation"
import {
  ChatBubbleBottomCenterTextIcon,
  BoltIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline"
import styles from "./navbar.module.css"

const links = [
  {
    path: "/blogs",
    label: "Blog",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    path: "/shots",
    label: "Shot",
    icon: PaintBrushIcon,
  },
  {
    path: "/snippets",
    label: "Snippet",
    icon: BoltIcon,
  },
]

export default function NavigationBar() {
  const pathname = usePathname()

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <img src="/me.png" alt="logo" />
        <strong>monody</strong>
      </Link>
      <div className={styles.links}>
        {links.map((item) => {
          const active = pathname.startsWith(item.path)
          return (
            <Link
              href={item.path}
              key={item.path}
              className={cx(styles.link, { [styles.active]: active })}
            >
              <item.icon className={styles.icon} />
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
