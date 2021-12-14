import { Layout } from 'components/layout/layout';
import { Post } from 'components/post/post';
import SEO from 'components/seo';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostType } from 'types/post.type';
import { getAllPosts, getPostBySlug } from 'utils/api.util';
import { md } from 'utils/markdown.util';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

type Params = {
  params: {
    slug: string;
  };
};

const CONTENT_PAGE_CACHE_TIME = 60 * 60 * 24 * 7; // 7 days

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'image',
    'tags',
  ]);
  const content = await md.parser(post.content || '');

  return {
    revalidate: CONTENT_PAGE_CACHE_TIME,
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: 'blocking',
  };
}

const SinglePost = ({ post }: Props) => {
  const router = useRouter();

  return !router.isFallback && !post?.slug ? (
    <ErrorPage statusCode={404} />
  ) : (
    <Layout active="blog">
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        slug={`/blog/${post.slug}`}
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
        />
      </Head>
      {router.isFallback ? <div>Loading…</div> : <Post post={post} />}
    </Layout>
  );
};

export default SinglePost;
