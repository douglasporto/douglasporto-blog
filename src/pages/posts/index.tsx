import { useState } from 'react'
import { BsList } from 'react-icons/bs'
import { MdDashboard } from 'react-icons/md'

import Head from 'next/head'

import {
  Box,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { getAllPosts } from 'lib/api'
import { CMS_NAME } from 'lib/constants'
import Post from 'types/post'

type TypeList = 'card' | 'list'
import PostItem from '@/components/PostList/PostList'

type Props = {
  allPosts: Post[]
}

const Posts = ({ allPosts }: Props) => {
  const [typeList, setTypeList] = useState<TypeList>('card')
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <Head>
        <title>Posts - {CMS_NAME}</title>
      </Head>

      <Box borderRadius="lg" mb={6}>
        <Flex alignItems="center" mb={12}>
          <Heading
            as="h3"
            fontSize="lg"
            color={useColorModeValue('purple.500', 'primary.main')}
            variant="section-title"
          >
            Articles
          </Heading>
          <IconButton
            variant="outline"
            aria-label="type list"
            fontSize="20px"
            color={typeList === 'card' ? 'primary.main' : ''}
            ml={12}
            onClick={() => setTypeList('card')}
            icon={<MdDashboard />}
          />
          <IconButton
            variant="outline"
            aria-label="type list"
            fontSize="20px"
            color={typeList === 'list' ? 'primary.main' : ''}
            ml={2}
            onClick={() => setTypeList('list')}
            icon={<BsList />}
          />
        </Flex>
        <Box
          as="ol"
          width="100%"
          margin="0 auto"
          display="flex"
          flexDirection="column"
        >
          <SimpleGrid
            as="ul"
            mb={40}
            columns={typeList === 'card' ? { md: 2, sm: 1 } : { base: 1 }}
            gap={typeList === 'card' ? 8 : 0}
          >
            {allPosts.map((post, index) => (
              <PostItem
                typeList={typeList}
                key={index}
                post={post}
                last={index === 0}
              />
            ))}
          </SimpleGrid>
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
