import fs from 'fs';
import Link from 'next/link';
import { getAllPosts } from 'utils/api.util';
import DateTime from 'utils/date.util';
import { generateRss } from 'utils/rss.util';
import { Layout } from 'components/layout/layout';
import styles from 'components/post/post.module.css';
import { PreviewPost } from 'types/post.type';

interface Props {
  posts: PreviewPost[];
}

const BlogPage = ({ posts }: Props) => {
  return (
    <Layout active="blog">
      {posts.map((post, key) => (
        <div className="mb-12" key={key}>
          <div className="flex items-center mb-2">
            {post.date && (
              <span className="text-middle">
                {DateTime.getDateString(post.date)}
              </span>
            )}
            <div className="w-2" />
            {post.tags && (
              <div className="flex">
                {post.tags.map((tag, index) => (
                  <span
                    className={[styles.tag, 'opacity-50'].join(' ')}
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <h2 className="text-2xl font-bold">
            <Link href={`/blog/${post.slug}`}>
              <a className="rainbown">{post.title}</a>
            </Link>
          </h2>
        </div>
      ))}
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const posts = getAllPosts(['title', 'slug', 'tags', 'excerpt', 'date']);
  const rss = await generateRss(posts as PreviewPost[]);
  fs.writeFileSync('./public/rss.xml', rss);
  return { props: { posts } };
};
