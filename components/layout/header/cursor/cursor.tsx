import {
  cloneElement,
  Fragment,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react"
import { createPortal } from "react-dom"
import s from "./cursor.module.css"
import waving from "./image/waving-hand.png"
import writing from "./image/writing-hand.png"

export type IconType = "👋" | "✍️"

interface Props {
  show?: boolean
  icon: IconType
  children: React.ReactElement<any>
}

interface CursorProps {
  icon: IconType
  cursorRef: RefObject<HTMLDivElement>
}

const CustomCursor = (props: CursorProps) => {
  const CursorImage = (
    <img
      src={props.icon === "👋" ? waving.src : writing.src}
      width={24}
      height={24}
      alt={props.icon}
    />
  )

  return (
    <div className={s.cursor} ref={props.cursorRef}>
      <div className={s.icon}>
        {props.icon === "👋" ? (
          <div className={s.wave}>{CursorImage}</div>
        ) : (
          CursorImage
        )}
      </div>
    </div>
  )
}

const Cursor = (props: Props) => {
  const childrenRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  const onMouseEnter = () => setMounted(true)
  const onMouseLeave = () => setMounted(false)

  const onMouseMove = (e: MouseEvent) => {
    if (mouseRef.current) {
      mouseRef.current.style.top = `${e.pageY - window.scrollY}px`
      mouseRef.current.style.left = `${e.pageX}px`
    }
  }

  useEffect(() => {
    if (!childrenRef.current) return
    childrenRef.current.addEventListener("mouseenter", onMouseEnter)
    childrenRef.current.addEventListener("mouseleave", onMouseLeave)
    childrenRef.current.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <Fragment>
      <div ref={childrenRef} className={s.container}>
        {props.children && cloneElement(props.children)}
      </div>
      {mounted &&
        childrenRef.current &&
        createPortal(
          <CustomCursor cursorRef={mouseRef} icon={props.icon} />,
          document.body,
        )}
    </Fragment>
  )
}

export { Cursor }
