import { ReactNode } from 'react'

import { useRouter } from 'next/router'

import Header from '_Layout/Header/Header'
import { Box, Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

type PageLayoutProps = {
  children: ReactNode
}

const PageLayout = (props: PageLayoutProps) => {
  const router = useRouter()
  return (
    <Box as="main" pb={8}>
      <Header path={router.asPath} />
      <Container maxW="container.md" pt={32}>
        <motion.article
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          {props.children}
        </motion.article>
      </Container>
    </Box>
  )
}

export default PageLayout
