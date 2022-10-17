import Head from 'next/head'

import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { getAllPosts } from 'lib/api'
import { CMS_NAME } from 'lib/constants'
import Post from 'types/post'

import PostItem from '@/components/PostList/PostList'

type Props = {
  allPosts: Post[]
}

const Posts = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <Head>
        <title>Posts - {CMS_NAME}</title>
      </Head>

      <Box borderRadius="lg" mb={6}>
        <Heading
          as="h3"
          fontSize="lg"
          color={useColorModeValue('purple.500', 'primary.main')}
          variant="section-title"
        >
          Posts
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
    </>
  )
}

export default Posts

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
