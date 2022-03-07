import Head from 'next/head'

import { Box, useColorModeValue } from '@chakra-ui/react'
import { CMS_NAME } from 'lib/constants'

const Works = () => {
  return (
    <>
      <Head>
        <title>Works - {CMS_NAME}</title>
      </Head>

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
