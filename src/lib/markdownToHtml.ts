// import remark from 'remark'
// import html from 'remark-html'

// export default async function markdownToHtml(markdown: string) {
//   const result = await remark().use(html).process(markdown)
//   return result.toString()
// }


import remark from 'remark'
import html from 'remark-html'
import remarkAutolinkHeadings from 'remark-autolink-headings'

import slug from 'remark-slug'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .use(slug)
    .use(remarkAutolinkHeadings, {
      behavior: 'wrap',
      linkProperties: {
        className: 'anchor'
      }
    })
    .process(markdown)

  return result.toString()
}
