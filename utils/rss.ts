import { Post, PostData } from "~components/blog/interface"
import { CONFIG } from "~components/seo/seo"

const generateRssItem = (post: PostData, path: string) => `
  <item>
    <guid>${CONFIG.url}/blog/${path}</guid>
    <title>${post.title}</title>
    <description>${post.excerpt}</description>
    <link>${CONFIG.url}/blog/${path}</link>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`

export const generateRss = (posts: Post[]) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${CONFIG.title}</title>
      <link>${CONFIG.url}</link>
      <description>${CONFIG.excerpt}</description>
      <language>vi</language>
      <lastBuildDate>${new Date(posts[0].data.date).toUTCString()}</lastBuildDate>
      <atom:link href="${CONFIG.title}" rel="self" type="application/rss+xml" />
      ${posts.map((item) => generateRssItem(item.data, item.filePath)).join("\n")}
    </channel>
  </rss>
`
