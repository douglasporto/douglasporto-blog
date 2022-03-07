// import fs from 'fs'
// import { join } from 'path'
// import matter from 'gray-matter'

// const postsDirectory = join(process.cwd(), '_posts')

// export function getPostSlugs() {
//   return fs.readdirSync(postsDirectory)
// }

// export function getPostBySlug(slug: string, fields: string[] = []) {
//   const realSlug = slug.replace(/\.md$/, '')
//   const fullPath = join(postsDirectory, `${realSlug}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')
//   const { data, content } = matter(fileContents)

//   type Items = {
//     [key: string]: string
//   }

//   const items: Items = {}

//   // Ensure only the minimal needed data is exposed
//   fields.forEach((field) => {
//     if (field === 'slug') {
//       items[field] = realSlug
//     }
//     if (field === 'content') {
//       items[field] = content
//     }

//     if (typeof data[field] !== 'undefined') {
//       items[field] = data[field]
//     }
//   })

//   return items
// }

// export function getAllPosts(fields: string[] = []) {
//   const slugs = getPostSlugs()
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug, fields))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//   return posts
// }

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostBySlug(slug: string) {
  // if (!slug) return null

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const date = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt
  })

  return {
    slug: realSlug,
    date: data.date.toString(),
    tags: data.tags,
    ...data,
    dateFormatted: date,
    content
  }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1?.date) > new Date(post2?.date) ? -1 : 1
    )

  return posts
}
