import { Box, useColorModeValue } from '@chakra-ui/react'

import Meta from '@/components/meta'

const Works = () => {
  return (
    <>
      <Meta title="Works" />

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        In construction
      </Box>
    </>
  )
}

export default Works

export const getStaticProps = async () => {
  return {
    props: {}
  }
}
