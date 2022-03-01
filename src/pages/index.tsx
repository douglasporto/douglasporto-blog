import Head from 'next/head'

import { useColorMode } from '@chakra-ui/color-mode'
import {
  Box,
  Button,
  Image,
  Heading,
  useColorModeValue,
  Stack
} from '@chakra-ui/react'
import styled from '@emotion/styled'

import PostItem from '@/components/PostList/PostList'

import OldContainer from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { getAllPosts } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const BioDescription = styled(Box)`
  padding-left: 3.4em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  console.log(allPosts)
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
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
      <Box display="flex">
        <Box flexGrow={1}>
          <Heading
            as="h2"
            variant="page-title"
            background="linear-gradient(#ec4899,#7e22ce)"
            backgroundClip="text"
          >
            Douglas Porto
          </Heading>
          <p>Web Developer</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
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
      <Box borderRadius="lg" mb={6}>
        <Heading
          as="h3"
          fontSize="lg"
          color={useColorModeValue('primary.main', 'primary.main')}
          variant="section-title"
        >
          Bio
        </Heading>
        <Stack spacing={4}>
          <Box>
            <BioYear>2009 - 2011</BioYear>
            <BioDescription>
              Formed in 2011 Analysis and System Development
            </BioDescription>
          </Box>
          <Box>
            <BioYear>2010 - 2019</BioYear>
            <BioDescription>Web Develop fullstack at Uranet</BioDescription>
          </Box>
          <Box>
            <BioYear>2019 - to present</BioYear>
            <BioDescription>Web Develop fullstack at Fabapp</BioDescription>
          </Box>
        </Stack>
      </Box>
      <Box borderRadius="lg" mb={6}>
        <Heading
          as="h3"
          fontSize="lg"
          color={useColorModeValue('purple.500', 'primary.main')}
          variant="section-title"
        >
          Blog
        </Heading>
        <Box
          as="ol"
          width="100%"
          margin="0 auto"
          display="flex"
          flexDirection="column"
        >
          {allPosts.map((post, index) => (
            <PostItem
              key={index}
              title={post.title}
              date={post.date}
              slug={post.slug}
              last={index === 0}
              tags={heroPost.tags}
            />
          ))}
        </Box>
      </Box>
      {/* <Button onClick={toggleColorMode}>
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
    props: { allPosts }
  }
}
