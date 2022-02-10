import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import { useColorMode } from '@chakra-ui/color-mode'
import { Button } from '@chakra-ui/button'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  console.log(colorMode)
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
    <div>aaaaaaaaa</div>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      {/* <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout> */}
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts()
  // const allPosts = getAllPosts([
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  //   'excerpt',
  // ])

  return {
    props: { allPosts },
  }
}
