import { Box, Heading, Text, useColorMode, VStack } from '@chakra-ui/react'
import format from 'date-fns/format'
import { AnimatePresence, motion } from 'framer-motion'
import PostType from 'types/post'

import DateFormatter from '../date-formatter'
import * as S from './PostList.styles'

type PostLinkProps = {
  post: PostType
  last: boolean
  typeList: 'card' | 'list'
}
const PostLink = ({ post, last, typeList }: PostLinkProps) => {
  const { slug, tags, date, title, coverImage, lang } = post
  const { colorMode } = useColorMode()
  const wpm = 225
  const words = post.content.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
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
                href={`posts/${slug}`}
                sx={{
                  _hover: {
                    color: 'white'
                  }
                }}
              >
                <S.PostPath colorMode={colorMode}>
                  {tags.length > 0 && tags.join('/')}
                  <S.PostDate>
                    {format(new Date(date), 'dd/MM/yyyy')}
                    {last && <S.PostLast>*</S.PostLast>}
                  </S.PostDate>
                </S.PostPath>
                <S.PostTitle>{title}</S.PostTitle>
                {last && <S.PostCursor>&nbsp;</S.PostCursor>}
              </Box>
            </S.PostItem>
          ) : (
            <Box
              as="a"
              href={`posts/${slug}`}
              sx={{
                _hover: {
                  color: 'white'
                }
              }}
            >
              <S.CardContainer as="li">
                <img src={coverImage} />
                <S.Title flexDirection="column" alignItems="center">
                  <VStack spacing={2}>
                    <Heading as="h3" fontSize="md">
                      {title}
                    </Heading>
                    <Text as="span" fontSize="sm">
                      <DateFormatter dateString={date} /> · Reading of {time}{' '}
                      min - in {lang}
                    </Text>
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

export default PostLink
