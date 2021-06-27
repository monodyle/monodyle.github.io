import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import stringify from 'rehype-stringify'
import slug from 'rehype-slug'
import math from 'remark-math'
import katex from 'rehype-katex'
import rehypeShiki from '@leafac/rehype-shiki'
import * as shiki from 'shiki'
import gfm from 'remark-gfm'
import footnotes from 'remark-footnotes'
import { emoji } from './emoji.util'

const pattern = /\!\((?:https?:\/\/(?:www.)?youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})\)/

const youtubeParser = (content: string) => {
  let finder: RegExpExecArray | null = null
  while ((finder = pattern.exec(content))) {
    content = content.replace(
      finder[0],
      `<iframe width="560" height="315" src="https://www.youtube.com/embed/${[
        finder[1]
      ]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    )
  }
  return content
}

async function parser (content: string) {
  const result = await unified()
    .use(markdown)
    .use(footnotes, { inlineNotes: true })
    .use(math)
    .use(remark2rehype)
    .use(katex)
    .use(gfm)
    .data('settings', { fragment: true })
    .use(rehypeShiki, {
      highlighter: await shiki.getHighlighter({ theme: 'github-light' })
    })
    .use(slug)
    .use(stringify)
    .process(content)
  return youtubeParser(emoji.parser(result.toString()))
}

export const md = {
  parser
}
