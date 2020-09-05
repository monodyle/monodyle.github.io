import React, { useEffect } from "react"
import { MDXProvider } from "@mdx-js/react"

import { postTranstion } from "config"
import Page from "components/page"
import SEO from "components/seo"
import components from "./mdx-components"
import { emojiPattern, emojiParse } from "../../utils"

export default function Post(meta = {}) {
  return ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      let container = document.querySelectorAll(`
        #content > p,
        #content > ul,
        #content > blockquote > p,
        #content [emoji="1"]
      `)
      // eslint-disable-next-line mdx/no-unused-expressions
      if (emojiPattern.test(document.querySelector("#content").textContent))
        container.forEach((i) => (i.innerHTML = emojiParse(i.innerHTML)))
    }, [])
    return (
      <MDXProvider components={components}>
        <Page variants={postTranstion} className="mt-8">
          <article>
            <SEO {...meta} />
            <h1 className="mb-10 text-3xl">{meta.title}</h1>
            {meta.image && (
              <div className="mb-10 bg-light-gray desktop:-mx-24">
                <img src={meta.image} alt={meta.title} title={meta.title} />
              </div>
            )}
            <div className="flex justify-between">
              {meta.date && (
                <time className="block mb-10 font-mono text-black">
                  {meta.date}
                </time>
              )}
              {meta.tags && (
                <div className="flex justify-end tag-group">
                  {meta.tags.map((tag, key) => (
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
            <div id="content">{children}</div>
          </article>
        </Page>
      </MDXProvider>
    )
  }
}
