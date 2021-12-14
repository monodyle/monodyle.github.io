import { Author } from './author.type';

export type PostType = {
  slug: string;
  title: string;
  content: string;
  date: string;
  excerpt: string;
  tags?: string[];
  author?: Author;
  image?: string;
};

export type PreviewPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
};
