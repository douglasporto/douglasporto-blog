import { useRouter } from 'next/router'

import { useColorMode } from '@chakra-ui/react'
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
  const router = useRouter()
  return (
    <S.PostItem
      colorMode={colorMode}
      onClick={() => router.push(`posts/${slug}`)}
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
    </S.PostItem>
  )
}

export default PostLink
