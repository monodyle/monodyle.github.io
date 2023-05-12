import { match } from 'ts-pattern'
import { getBlogContent } from './content'
import { parseMarkdown } from './markdown/parse'
import styles from './page.module.css'

export default async function Post({
  params,
}: {
  params: {
    page: string
  }
}) {
  const response = await getBlogContent(params.page)
  const content = await match(response.data)
    .with({ type: 'file' }, async data => {
      const markdown = Buffer.from(data.content, 'base64').toString()
      const { html, meta } = await parseMarkdown(markdown)
      return { html, meta }
    })
    .otherwise(() => null)

  if (!content) return null
  return <div className={styles.prose} dangerouslySetInnerHTML={{ __html: content.html }} />
}
