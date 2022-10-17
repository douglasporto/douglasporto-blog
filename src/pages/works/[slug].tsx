import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Text } from '@chakra-ui/react'
import Container from 'components/container'
import PostBody from 'components/post-body'
import { getAllWorks, getWorkBySlug } from 'lib/apiWorks'
import { CMS_NAME } from 'lib/constants'
import markdownToHtml from 'lib/markdownToHtml'
import WorkType from 'types/work'

export default function Work(work: WorkType) {
  const router = useRouter()

  if (!router.isFallback && !work?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container>
      {router.isFallback ? (
        <Text fontSize="3xl">Loading…</Text>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {work.title} | {CMS_NAME}
              </title>
            </Head>
            <PostBody content={work.content} />
          </article>
        </>
      )}
    </Container>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const { slug } = params
  const work = getWorkBySlug(slug)
  const content = await markdownToHtml(work.content || '')

  // get prev/next posts
  const allPosts = getAllWorks()
  const currentPostIndex = allPosts.findIndex((p) => p.slug === slug)
  const nextPost = allPosts[currentPostIndex - 1] ?? null
  const prevPost = allPosts[currentPostIndex + 1] ?? null

  return {
    props: {
      ...work,
      content,
      nextPost,
      prevPost
    }
  }
}

export async function getStaticPaths() {
  const works = getAllWorks()
  const paths = works.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
