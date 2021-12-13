import Link from "next/link"
import { RefObject, useRef } from "react"
import { Cursor, IconType } from "./cursor/cursor"
import s from "./header.module.css"

export type ActiveMenuItem = "hi" | "blog"
interface Props {
  active?: ActiveMenuItem
}

const MENU: {
  [K in ActiveMenuItem]: {
    title: string
    emoji: IconType
    path: string
  }
} = {
  hi: {
    title: "hi",
    emoji: "👋",
    path: "/hi",
  },
  blog: {
    title: "blog",
    emoji: "✍️",
    path: "/blog",
  },
}

interface ItemProps {
  path: string
  title: string
  emoji: IconType
  headerRef: RefObject<HTMLDivElement>
}

const Item = (props: ItemProps) => (
  <Cursor icon={props.emoji}>
    <Link href={props.path}>
      <a className={[s.link, "rainbown", s.hideCursor].join(" ")}>
        /{props.title}
      </a>
    </Link>
  </Cursor>
)

export const Header = (props: Props) => {
  const headerRef = useRef<HTMLDivElement>(null)
  return (
    <div className={s.container} ref={headerRef}>
      <div className={s.wrapper}>
        <header className={s.header}>
          <div className={s.left}>
            <Link href="/">
              <a className={[s.link, "rainbown"].join(" ")}>/home</a>
            </Link>
            {props.active && (
              <Link href={MENU[props.active].path}>
                <a className={[s.link, "rainbown"].join(" ")}>
                  /{MENU[props.active].title}
                </a>
              </Link>
            )}
            <span className={s.cursor} />
          </div>
          <div className={s.right}>
            {Object.entries(MENU).map(([key, value]) => {
              if (key === props.active) return null
              return (
                <Item
                  key={key}
                  path={value.path}
                  title={value.title}
                  emoji={value.emoji}
                  headerRef={headerRef}
                />
              )
            })}
          </div>
        </header>
      </div>
    </div>
  )
}
