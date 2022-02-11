import { ReactNode } from 'react'

import { useRouter } from 'next/router'

import Header from '_Layout/Header/Header'
import { Box, Container } from '@chakra-ui/react'

type PageLayoutProps = {
  children: ReactNode
}

const PageLayout = (props: PageLayoutProps) => {
  const router = useRouter()
  return (
    <Box as="main" pb={8}>
      <Header path={router.asPath} />
      <Container maxW="container.md" pt={32}>
        {props.children}
      </Container>
    </Box>
  )
}

export default PageLayout
