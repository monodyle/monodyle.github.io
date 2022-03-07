const fs = require("fs")
import { getAllPosts } from "~utils/mdx"
import { generateRss } from "~utils/rss"

const posts = getAllPosts()
const rss = generateRss(posts)
fs.writeFileSync("./public/rss.xml", rss)
