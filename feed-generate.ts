import fs from "fs"
import { getAllPosts } from "~utils/mdx"
import { generateRss } from "~utils/rss"

const posts = getAllPosts()
const rss = generateRss(posts)
fs.writeFileSync("./public/rss.xml", rss)
