import { config } from 'config/config'
import { PreviewPost } from 'types/post.type'

export async function generateRssItem (post: PreviewPost) {
  return `
    <item>
      <guid>${config.url}/posts/${post.slug}</guid>
      <title>${post.title}</title>
      <description>${post.excerpt}</description>
      <link>${config.url}/posts/${post.slug}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
  `
}

export async function generateRss (posts: PreviewPost[]) {
  const xml = await Promise.all(posts.map(generateRssItem))

  return `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${config.title}</title>
        <link>${config.url}</link>
        <description>${config.excerpt}</description>
        <language>vi</language>
        <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
        <atom:link href="${
          config.title
        }" rel="self" type="application/rss+xml" />
        ${xml.join('')}
      </channel>
    </rss>
  `
}

