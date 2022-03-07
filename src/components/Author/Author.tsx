import React from 'react'

import { Box, Heading, useColorModeValue, Image, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'

const BioDescription = styled(Box)`
  padding-left: 3.4em;
`

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

const Author = () => {
  return (
    <>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I{`'`}m a full-stack developer based in Brazil!
      </Box>
      <Box display="flex">
        <Box flexGrow={1}>
          <Heading
            as="h2"
            variant="page-title"
            background="linear-gradient(#ec4899,#7e22ce)"
            backgroundClip="text"
          >
            Douglas Porto
          </Heading>
          <p>Developer Engineer</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            boxSize="100px"
            objectFit="cover"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/assets/profile/douglas-porto.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Box borderRadius="lg" mb={6}>
        <Heading
          as="h3"
          fontSize="lg"
          color={useColorModeValue('primary.main', 'primary.main')}
          variant="section-title"
        >
          Bio
        </Heading>
        <Stack spacing={4}>
          <Box>
            <BioYear>2009 - 2011</BioYear>
            <BioDescription>
              Formed in 2011 Analysis and System Development
            </BioDescription>
          </Box>
          <Box>
            <BioYear>2010 - 2019</BioYear>
            <BioDescription>Web Develop fullstack at Uranet</BioDescription>
          </Box>
          <Box>
            <BioYear>2019 - to present</BioYear>
            <BioDescription>Web Develop fullstack at Fabapp</BioDescription>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Author
