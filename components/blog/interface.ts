export interface PostData {
  date: string
  image?: string
  title: string
  excerpt: string
  tags?: string[]
}

export interface Post {
  content: string
  filePath: string
  data: PostData
}
