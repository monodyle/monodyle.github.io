import { Octokit } from 'octokit'
import { cache } from 'react'
import 'server-only'

const auth = process.env.GITHUB_TOKEN ?? ''
if (auth === '') console.warn('No GITHUB_TOKEN')
const octokit = new Octokit({ auth })

const _getBlogContent = async (slug: string) => {
  const url = 'GET /repos/{owner}/{repo}/contents/{path}'
  return octokit.request(url, {
    owner: 'monodyle',
    repo: 'monodyle.github.io',
    path: `posts/${slug}.mdx`,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
}

export const getBlogContent = cache(_getBlogContent)
