import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { getAllPosts } from 'lib/api'
import Post from 'types/post'

import Author from '@/components/Author/Author'
import Meta from '@/components/meta'
import PostItem from '@/components/PostList/PostList'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <Meta />
      <Author />
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
