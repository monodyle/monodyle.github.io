import { NextApiRequest, NextApiResponse } from "next"
import { getAllPosts } from "~utils/mdx"
import { generateRss } from "~utils/rss"

export default function Feed(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).end(generateRss(getAllPosts()))
}
