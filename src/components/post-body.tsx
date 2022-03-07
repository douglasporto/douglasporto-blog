import { useEffect, useState } from 'react'

import { useColorMode } from '@chakra-ui/react'
import Prism from 'prismjs'

import { Container } from './post-body.styles'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  const [post, setPost] = useState('loading...')
  const { colorMode } = useColorMode()
  useEffect(() => {
    function highlightCodeInHTML(html: string): string {
      const container = document.createElement('div')
      container.innerHTML = html

      Prism.highlightAllUnder(container)

      return container.innerHTML
    }

    setPost(highlightCodeInHTML(content))
  }, [content])

  return (
    <Container colorMode={colorMode}>
      <div className={'markdown'} dangerouslySetInnerHTML={{ __html: post }} />
    </Container>
  )
}

export default PostBody
