import { useState } from 'react'
import { BsList } from 'react-icons/bs'
import { MdDashboard } from 'react-icons/md'

import Head from 'next/head'

import {
  Box,
  Flex,
  Heading,
  IconButton,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { PostDevTo, getPosts } from 'api/getPostsDevTo'
import { getAllPosts } from 'lib/api'
import { CMS_NAME } from 'lib/constants'
import Post from 'types/post'

import PostItem from '@/components/PostList/PostList'
import { PostItemDevTo } from '@/components/PostList/PostListDevTo'

type TypeList = 'card' | 'list'

type Props = {
  allPosts: Post[]
  dataDevTo: PostDevTo[]
}

const Posts = ({ allPosts, dataDevTo }: Props) => {
  const [typeList, setTypeList] = useState<TypeList>('card')
  const [language, setLanguage] = useState('en_US')
  const primaryColor = useColorModeValue('primary.light', 'primary.main')

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
            color={primaryColor}
            variant="section-title"
          >
            Posts
          </Heading>
          <IconButton
            variant="outline"
            aria-label="type list"
            fontSize="20px"
            color={typeList === 'card' ? primaryColor : ''}
            ml={12}
            onClick={() => setTypeList('card')}
            icon={<MdDashboard />}
          />
          <IconButton
            variant="outline"
            aria-label="type list"
            fontSize="20px"
            color={typeList === 'list' ? primaryColor : ''}
            ml={2}
            onClick={() => setTypeList('list')}
            icon={<BsList />}
          />
          <RadioGroup
            onChange={setLanguage}
            value={language}
            paddingLeft={8}
            colorScheme={'purple'}
          >
            <Stack direction="row">
              <Radio value="pt_BR">Portuguese</Radio>
              <Radio value="en_US">English</Radio>
            </Stack>
          </RadioGroup>
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
            {language === 'pt_BR' ? (
              <>
                {allPosts.map((post, index) => (
                  <PostItem
                    typeList={typeList}
                    key={index}
                    post={post}
                    last={index === 0}
                  />
                ))}
              </>
            ) : (
              <>
                {dataDevTo?.map((post, index) => (
                  <PostItemDevTo
                    typeList={typeList}
                    key={post.id}
                    post={post}
                    last={index === 0}
                  />
                ))}
              </>
            )}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}

export default Posts

export const getStaticProps = async () => {
  const allPosts = getAllPosts()
  const dataDevTo = await getPosts()
  // const allPosts = getAllPosts([
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  //   'excerpt',
  // ])

  return {
    props: { allPosts, dataDevTo }
  }
}
