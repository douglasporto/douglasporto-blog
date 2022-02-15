import Head from 'next/head'

import { useColorMode } from '@chakra-ui/color-mode'
import {
  Box,
  Button,
  Image,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'

import OldContainer from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { getAllPosts } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I{`'`}m a full-stack developer based in Brazil!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Douglas Porto
          </Heading>
          <p>Web Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            boxSize="100px"
            objectFit="cover"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/assets/profile/douglas-porto.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <Layout>
        <OldContainer>
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
        </OldContainer>
      </Layout>
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
    props: { allPosts }
  }
}
