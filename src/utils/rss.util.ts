import { CONFIG } from 'config/config';
import { PreviewPost } from 'types/post.type';

export async function generateRssItem(post: PreviewPost) {
  return `
    <item>
      <guid>${CONFIG.url}/blog/${post.slug}</guid>
      <title>${post.title}</title>
      <description>${post.excerpt}</description>
      <link>${CONFIG.url}/blog/${post.slug}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
  `;
}

export async function generateRss(posts: PreviewPost[]) {
  const xml = await Promise.all(posts.map(generateRssItem));

  return `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${CONFIG.title}</title>
        <link>${CONFIG.url}</link>
        <description>${CONFIG.excerpt}</description>
        <language>vi</language>
        <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
        <atom:link href="${
          CONFIG.title
        }" rel="self" type="application/rss+xml" />
        ${xml.join('')}
      </channel>
    </rss>
  `;
}
