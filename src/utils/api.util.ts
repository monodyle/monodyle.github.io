import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { PostType } from 'types/post.type';
type PostFields = keyof PostType;

const postsDirectory = join(process.cwd(), 'posts');
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

type Items = {
  [key: string]: string;
};

export function getPostBySlug(slug: string, fields: PostFields[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Items = {};
  fields.forEach((field) => {
    if (field === 'slug') items[field] = realSlug;
    if (field === 'content') items[field] = content;
    if (data[field as string]) items[field as string] = data[field as string];
  });

  return items;
}

export function getAllPosts(
  fields: Partial<PostFields>[] = [],
): Partial<PostType>[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
  return posts;
}
