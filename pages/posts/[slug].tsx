import { useRouter } from 'next/router'
import { useEffect } from 'react'

import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = (post: PostType) => {
  const router = useRouter()
  console.log(post)

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    // <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
              </Head>
               <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />  
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    // </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const slug = params.slug
  const post = getPostBySlug(slug)
  const content = await markdownToHtml(post.content || '')

  // get prev/next posts
  const allPosts = getAllPosts()
  const currentPostIndex = allPosts.findIndex(p => p.slug === slug)
  const nextPost = allPosts[currentPostIndex - 1] ?? null
  const prevPost = allPosts[currentPostIndex + 1] ?? null

  return {
    props: {
      ...post,
      content,
      nextPost,
      prevPost
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
