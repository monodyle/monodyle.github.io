import rehypeLink, { Options as RehypeLinkOptions } from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { PluggableList } from 'unified'

const rehypeLinkOption: RehypeLinkOptions = {
  behavior: 'prepend',
  content: { type: 'text', value: '' },
  test: ['h2', 'h3', 'h4', 'h5', 'h6'],
  properties: {
    class: [],
  },
}

export const markdownHeading: PluggableList = [rehypeSlug, [rehypeLink, rehypeLinkOption]]
