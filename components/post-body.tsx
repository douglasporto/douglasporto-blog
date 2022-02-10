import { useEffect, useState } from 'react'
import Prism from 'prismjs'

import { Container } from './post-body.styles'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  const [post, setPost] = useState("loading...");
  useEffect(() => {
    function highlightCodeInHTML(html: string): string {
      const container = document.createElement("div");
      container.innerHTML = html;

      // console.log(container.innerHTML)
      Prism.highlightAllUnder(container);

      return container.innerHTML;
    }

    // console.log(highlightCodeInHTML(content))
    setPost(highlightCodeInHTML(content));
  }, []);

  return (
    <Container>
      <div
        className={'markdown'}
        dangerouslySetInnerHTML={{ __html: post }} />
    </Container>
  )
}

export default PostBody
