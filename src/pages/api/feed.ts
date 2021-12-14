import { CONFIG } from 'config/config';
import { NextApiRequest, NextApiResponse } from 'next';
import { PreviewPost } from 'types/post.type';
import { getAllPosts } from 'utils/api.util';

const postsRssXml = (blogPosts: PreviewPost[]) => {
  let lastPostDate = '';
  let xml = '';
  blogPosts.forEach((post) => {
    const date = Date.parse(post.date);
    if (!lastPostDate || date > Date.parse(lastPostDate))
      lastPostDate = post.date;
    xml += `
      <item>
        <title>${post.title}</title>
        <link>${CONFIG.url}/blog/${post.slug}</link>
        <pubDate>${post.date}</pubDate>
        <description><![CDATA[${post.excerpt}]]></description>
    </item>`;
  });
  return {
    xml,
    lastPostDate,
  };
};

const getRssXml = (posts: PreviewPost[]) => {
  const { xml, lastPostDate } = postsRssXml(posts);
  return `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
        <title>${CONFIG.title}</title>
        <link>${CONFIG.url}</link>
        <description>${CONFIG.excerpt}</description>
        <language>vi</language>
        <lastBuildDate>${lastPostDate}</lastBuildDate>
        ${xml}
    </channel>
  </rss>`;
};

export default function Feed(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .end(
      getRssXml(
        getAllPosts(['title', 'slug', 'date', 'excerpt']) as PreviewPost[],
      ),
    );
}
