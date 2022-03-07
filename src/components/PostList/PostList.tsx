import { Box, useColorMode } from '@chakra-ui/react'
import format from 'date-fns/format'

import * as S from './PostList.styles'

type PostLinkProps = {
  title: string
  date: string
  slug: string
  last: boolean
  tags: string[]
}
const PostLink = ({ title, date, slug, last, tags }: PostLinkProps) => {
  const { colorMode } = useColorMode()

  return (
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
  )
}

export default PostLink
