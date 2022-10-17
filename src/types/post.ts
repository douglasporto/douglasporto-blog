import Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  tags: string[]
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  lang: 'English' | 'Portuguese'
}

export default PostType
