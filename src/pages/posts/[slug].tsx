import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Container from 'components/container'
import PostBody from 'components/post-body'
import PostHeader from 'components/post-header'
import { motion, useScroll, useSpring } from 'framer-motion'
import { getPostBySlug, getAllPosts } from 'lib/api'
import { CMS_NAME } from 'lib/constants'
import markdownToHtml from 'lib/markdownToHtml'
import PostType from 'types/post'

const Progress = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: #805ad5;
  transform-origin: 0%;
`

const Post = (post: PostType) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const router = useRouter()

  const wpm = 225
  const words = post.content.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container>
      <Progress style={{ scaleX }} />
      {router.isFallback ? (
        <Text fontSize="3xl">Loading…</Text>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {post.title} | {CMS_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              timeToRead={time}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Container>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const { slug } = params
  const post = getPostBySlug(slug)
  const content = await markdownToHtml(post.content || '')

  // get prev/next posts
  const allPosts = getAllPosts()
  const currentPostIndex = allPosts.findIndex((p) => p.slug === slug)
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
