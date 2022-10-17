import { useState } from 'react'
import { BsList } from 'react-icons/bs'
import { MdDashboard } from 'react-icons/md'

import {
  Box,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { getAllPosts } from 'lib/api'
import { getAllWorks } from 'lib/apiWorks'
import Post from 'types/post'
import Work from 'types/work'

import Author from '@/components/Author/Author'
import Meta from '@/components/meta'
import PostItem from '@/components/PostList/PostList'
import { WorkCard } from '@/components/WorkCard/WorkCard'

type Props = {
  allPosts: Post[]
  allWorks: Work[]
}

type TypeList = 'card' | 'list'

const Index = ({ allPosts, allWorks }: Props) => {
  const firstTwoWorks = allWorks.slice(0, 2)
  const [typeList, setTypeList] = useState<TypeList>('card')
  const color = useColorModeValue('purple.500', 'primary.main')
  return (
    <>
      <Meta />
      <Author />
      <Box borderRadius="lg" mt={12} mb={6}>
        <Heading
          as="h3"
          fontSize="lg"
          color={useColorModeValue('purple.500', 'primary.main')}
          variant="section-title"
        >
          Latest Projects
        </Heading>

        <Box as="section" mt="8">
          <SimpleGrid as="ul" columns={{ md: 2, sm: 1 }} gap={8}>
            {firstTwoWorks.map((work, index) => (
              <WorkCard
                key={index}
                title={work.title}
                description={work.description}
                image={work.coverImage}
                slug={work.slug}
              />
            ))}
          </SimpleGrid>
          <Flex justifyContent="center" mt={8} mb={12}>
            <Box
              as="a"
              href="/works"
              sx={{
                _hover: {
                  color: 'white'
                }
              }}
            >
              <Heading
                as="h5"
                fontSize="md"
                color={useColorModeValue('purple.500', 'primary.main')}
              >
                See more project
              </Heading>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box borderRadius="lg">
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
            color={typeList === 'card' ? color : ''}
            ml={12}
            onClick={() => setTypeList('card')}
            icon={<MdDashboard />}
          />
          <IconButton
            variant="outline"
            aria-label="type list"
            fontSize="20px"
            color={typeList === 'list' ? color : ''}
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
            gap={typeList === 'card' ? 14 : 0}
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

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts()
  const allWorks = getAllWorks()

  return {
    props: { allPosts, allWorks }
  }
}
