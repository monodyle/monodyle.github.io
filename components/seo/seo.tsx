import Head from "next/head"

export const CONFIG = {
  author: "Monody Le",
  url: "https://www.minhle.space",
  title: "The Monody Space",
  excerpt: "Hello, just a simple guy.",
  image: "/assets/cover.png",
  email: "hi@minhle.space",
}

export default function SEO({
  title = CONFIG.title,
  description = CONFIG.excerpt,
  image = CONFIG.image,
  slug = "/",
}) {
  const url = `${CONFIG.url}${slug}`
  const previewImage = `${CONFIG.url}${image}`
  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={previewImage} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={CONFIG.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={previewImage} />
      <meta name="twitter:creator" content="@trait_sniper" />
    </Head>
  )
}
