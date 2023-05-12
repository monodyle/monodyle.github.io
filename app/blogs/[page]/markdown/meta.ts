// TypeScript does not merge nested fields (vfile.data.meta in this case) so
// we need the full type from "rehype-meta", even though we don't use its code.
// Also for this to work, "rehype-meta" must come before "-infer"s imports.
import 'rehype-meta'

import rehypeDescription from 'rehype-infer-description-meta'
import rehypeTitle, { Options as RehypeTitleOptions } from 'rehype-infer-title-meta'
import { PluggableList } from 'unified'

const rehypeTitleOptions: RehypeTitleOptions = {
  selector: 'h1,h2,h3',
}

export const markdownMeta: PluggableList = [rehypeDescription, [rehypeTitle, rehypeTitleOptions]]
