import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { PostData } from "../interface"
import components from "../components/components"
import s from "./post.module.css"
import { PostHeader } from "./header/header"
import { PostSettings } from "./settings/settings"
import { useEffect, useRef, useState } from "react"
import { PostScroll } from "./scroll/scroll"
import { useSettings } from "./settings/context"

interface Props {
  post: PostData
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}

export const Post = (props: Props) => {
  const { settings } = useSettings()
  const [words, setWords] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const content = contentRef.current
    if (!content) return
    const scrollTop = window.scrollY - content.offsetTop
    const top = Math.max(0, scrollTop)
    const docHeight = content.offsetHeight
    const windowHeight = window.innerHeight

    const scrollPercent = top / (docHeight - windowHeight)
    const percentage = Math.round(scrollPercent * 100)
    setPercentage(Math.min(100, percentage))
  }

  useEffect(() => {
    // Count words length
    if (contentRef.current) {
      setWords(contentRef.current.innerText.split(" ").length)
    }

    // Scroll bar
    window.addEventListener("scroll", handleScroll, false)
    return () => void window.removeEventListener("scroll", handleScroll, false)
  }, [])

  return (
    <div className={s.container}>
      <PostHeader post={props.post} time={Math.round(words / 200)} />
      <PostSettings />
      <PostScroll percentage={percentage} />
      <div
        className={s.content}
        style={{
          fontFamily: `var(--${settings.font})`,
          fontSize: settings.size,
        }}
        ref={contentRef}
      >
        {<MDXRemote {...props.source} components={components} />}
      </div>
    </div>
  )
}
