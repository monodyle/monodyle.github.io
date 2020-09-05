import React from "react"
import Link from "next/link"
import compareDesc from "date-fns/compareDesc"

import { importAll } from "utils"
import Page from "components/page"
import SEO from "components/seo"

const postList = importAll(require.context(".", true, /.mdx?$/))

export default function BlogListing() {
  const [posts, setPosts] = React.useState(postList)

  React.useEffect(() => {
    setPosts((prev) =>
      prev
        .slice()
        .sort((a, b) =>
          compareDesc(new Date(a.meta.date), new Date(b.meta.date)),
        ),
    )
  }, [])

  return (
    <Page className="pb-10">
      <SEO title="Blog — The Monody's Blog" />
      <div className="mx-auto">
        {posts.map(({ meta }, index) => (
          <Link href={meta.slug} key={index}>
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
    </Page>
  )
}
