import { ActiveHeaderItem, MenuItem } from 'components/layout/header';

export const CONFIG = {
  author: 'Monody Le',
  url: 'https://minhle.space',
  title: "The Monody's Space",
  excerpt: 'Hello, just a simple guy.',
  image: '/assets/cover.png',
  email: 'hi@minhle.space',
};

export const SOCIALS = {
  github: 'https://github.com/monodyle',
  facebook: 'https://fb.me/monodylh',
  twitter: 'https://twitter.com/monodyle',
};

export const LINKS = {
  kofi: 'https://ko-fi.com/monodyle',
};

export const MENU: {
  [K in ActiveHeaderItem]: MenuItem;
} = {
  hi: {
    title: 'say hi.',
    emoji: '👋',
    slug: '/hi',
  },
  work: {
    title: 'working.',
    emoji: '💻',
    slug: '/work',
  },
  blog: {
    title: 'writing.',
    emoji: '📝',
    slug: '/blog',
  },
};
