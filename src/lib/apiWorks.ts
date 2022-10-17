import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_works')

export function getWorkBySlug(slug: string) {
  // if (!slug) return null

  const realSlug = slug.replace(/\.md$/, '')
  console.log('real', realSlug)
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const date = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt
  })

  return {
    slug: realSlug,
    date: data.date.toString(),
    ...data,
    dateFormatted: date,
    content,
    published: data?.published ? true : false
  }
}

export function getAllWorks() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .map((slug) => getWorkBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1?.date) > new Date(post2?.date) ? -1 : 1
    )

  return posts.filter((post) => post.published)
}
