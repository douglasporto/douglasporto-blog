import { FaComments, FaHeart } from 'react-icons/fa'

import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorMode,
  VStack
} from '@chakra-ui/react'
import { PostDevTo } from 'api/getPostsDevTo'
import format from 'date-fns/format'
import { AnimatePresence, motion } from 'framer-motion'

import DateFormatter from '../date-formatter'
import * as S from './PostList.styles'

type PostItemDevToProps = {
  post: PostDevTo
  last: boolean
  typeList: 'card' | 'list'
}

export const PostItemDevTo = ({ post, last, typeList }: PostItemDevToProps) => {
  const { colorMode } = useColorMode()
  const time = post.reading_time_minutes
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={typeList}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {typeList === 'list' ? (
            <S.PostItem colorMode={colorMode}>
              <Box
                as="a"
                href={post.url}
                target="_blank"
                sx={{
                  _hover: {
                    color: 'white'
                  }
                }}
              >
                <S.PostPath colorMode={colorMode}>
                  {post.tag_list.length > 0 && post.tag_list.join('/')}
                  <S.PostDate>
                    {format(new Date(post.created_at), 'MM/dd/yyyy')}
                    {last && <S.PostLast>*</S.PostLast>}
                  </S.PostDate>
                </S.PostPath>
                <S.PostTitle>{post.title}</S.PostTitle>
                {last && <S.PostCursor>&nbsp;</S.PostCursor>}
              </Box>
            </S.PostItem>
          ) : (
            <Box
              as="a"
              href={post.url}
              target="_blank"
              sx={{
                _hover: {
                  color: 'white'
                }
              }}
            >
              <S.CardContainer as="li">
                <img src={post.cover_image} />
                <S.Title flexDirection="column" alignItems="center">
                  <VStack spacing={2}>
                    <Heading as="h3" fontSize="md">
                      {post.title}
                    </Heading>
                    <Text as="span" fontSize="sm">
                      <DateFormatter dateString={post.created_at} /> · Reading
                      of {time} min
                    </Text>
                    <Flex w="100%" alignItems="center" justifyContent="center">
                      <HStack spacing={2}>
                        <FaHeart color="red" />
                        <Text as="span" fontSize="xs">
                          {post.public_reactions_count}
                        </Text>
                        <Text as="span" fontSize="xs">
                          {'   '}·{'   '}
                        </Text>
                        <FaComments />
                        <Text as="span" fontSize="xs">
                          {post.comments_count}
                        </Text>
                      </HStack>
                    </Flex>
                  </VStack>
                </S.Title>
              </S.CardContainer>
            </Box>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
