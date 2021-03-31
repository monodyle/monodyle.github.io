import React from "react"
import Link from "next/link"
import compareDesc from "date-fns/compareDesc"

import SEO from "components/seo"
import { getFrontMatters } from "utils"

export default function Blog({ posts }) {
  return (
    <div className="pb-10">
      <SEO title="Blog — The Monody's Blog" />
      {posts
        .filter(p => p.date)
        .sort((a, b) =>
          compareDesc(new Date(a.date), new Date(b.date)),
        ).map((meta) => (
          <Link
            passHref
            href="/blog/[slug]"
            as={`/blog/${meta.slug}`}
            key={meta.slug}
          >
            <a className="block mt-8 text-xl hover:cursor-pointer group">
              <time className="font-mono text-sm text-dark-gray">
                {meta.date}
              </time>
              <h2 className="text-xl font-semibold leading-tight tablet:text-2xl group-hover:text-primary">
                {meta.title}
              </h2>
            </a>
          </Link>
        ))}
    </div>
  )
}

export async function getStaticProps() {
  const frontMatters = await getFrontMatters("posts")
  const isPublished = ({ publish }) => publish !== false

  return {
    props: {
      posts: frontMatters.filter(isPublished),
    },
  }
}
