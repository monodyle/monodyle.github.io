import { useEffect } from "react"
import { MDXProvider } from "@mdx-js/react"
import SEO from "components/seo"
import components from "./mdx-components"
import { emojiPattern, emojiParse } from "utils"

export default function Post({ metadata, children }) {
  useEffect(() => {
      let container = document.querySelectorAll(`
        #content > p,
        #content > ul,
        #content > blockquote > p,
        #content [emoji="1"]
      `)

      if (emojiPattern.test(document.querySelector("#content").textContent))
        container.forEach((i) => (i.innerHTML = emojiParse(i.innerHTML)))
  }, [])

  return (
    <MDXProvider components={components}>
      <article className="py-8">
        <SEO {...metadata} />
        {metadata.title && (
          <h1 id="article-title" className="mb-10 text-3xl">{metadata.title}</h1>
        )}
        {metadata.image && (
          <div className="mb-10 bg-light-gray desktop:-mx-24">
            <img src={metadata.image} alt={metadata.title} title={metadata.title} />
          </div>
        )}
        {metadata.date && (
          <div className="flex justify-between">
            {metadata.date && (
              <time className="block mb-10 font-mono text-black">
                {metadata.date}
              </time>
            )}
            {metadata.tags && (
              <div className="flex justify-end tag-group">
                {metadata.tags.map((tag, key) => (
                  <span
                    className="mr-4 font-mono font-medium text-black tag"
                    key={key}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        <div id="content">{children}</div>
      </article>
    </MDXProvider>
  )
}
