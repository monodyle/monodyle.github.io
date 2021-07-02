import Link from 'next/link';
import Image from 'next/image';
import { PostType } from 'types/post.type';
import DateTime from 'utils/date.util';
import styles from './post.module.css';

interface Props {
  post: PostType;
}

const Post = ({ post }: Props) => {
  return (
    <article className={styles.article}>
      <div className="mb-6 font-bold">
        <Link href="/blog">
          <a className="rainbown">&lt; Back</a>
        </Link>
      </div>
      {post.image && (
        <div className={styles.hero}>
          <Image
            src={post.image}
            alt={post.title}
            title={post.title}
            width={896}
            height={470}
          />
        </div>
      )}
      <div className="flex items-center justify-between mb-2">
        <span className={styles.time}>{DateTime.getDateString(post.date)}</span>
        {post.tags && (
          <div className="flex">
            {post.tags.map((tag, index) => (
              <span className={styles.tag} key={index}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <h2 className={styles.title}>{post.title}</h2>
      <div
        id="content"
        className={[styles.content, styles.markdown].join(' ')}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export { Post };
