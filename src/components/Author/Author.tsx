import React from 'react'
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from 'react-icons/ri'

import {
  Box,
  Heading,
  useColorModeValue,
  Image,
  Stack,
  Text,
  Button
} from '@chakra-ui/react'
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
          <p>Senior Developer Engineer</p>
          <Box pt={4} pb={4}>
            <Text as="span" fontSize="md">
              Douglas is a freelancer, full-stack developer based in Brazil with
              a passion for creating digital services/things. He likes all
              things product launches, from planning and designing to solving
              real-life problems with code. When not online, he loves to watch
              movies and series. He is currently working at{' '}
              <a
                href="https://fabricadeaplicativos.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                Fabapp
              </a>
              , an app company.
            </Text>
          </Box>
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
      <Box borderRadius="lg" mb={12}>
        <Heading
          as="h3"
          fontSize="lg"
          color={useColorModeValue('purple.500', 'primary.main')}
          variant="section-title"
        >
          Bio
        </Heading>
        <Stack spacing={4}>
          <Box>
            <BioYear>2019 - to present</BioYear>
            <BioDescription>Senior Develop fullstack at Fabapp</BioDescription>
          </Box>
          <Box>
            <BioYear>2010 - 2019</BioYear>
            <BioDescription>Web Develop fullstack at Uranet</BioDescription>
          </Box>
          <Box>
            <BioYear>2009 - 2011</BioYear>
            <BioDescription>
              Formed in 2011 Analysis and System Development
            </BioDescription>
          </Box>
        </Stack>
      </Box>
      <Box borderRadius="lg" mb={12}>
        <Heading
          as="h3"
          fontSize="lg"
          color={useColorModeValue('purple.500', 'primary.main')}
          variant="section-title"
        >
          On the web
        </Heading>
        <Stack spacing={4}>
          <Box ml={6} display="flex" flexDirection="column" alignItems="start">
            <Button
              onClick={() =>
                window.open('https://github.com/douglasporto', '_blank')
              }
              variant="ghost"
              leftIcon={<RiGithubFill />}
            >
              Github
            </Button>
            <Button
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/douglas-porto/',
                  '_blank'
                )
              }
              variant="ghost"
              leftIcon={<RiLinkedinBoxFill />}
            >
              LinkedIn
            </Button>
            <Button
              onClick={() =>
                window.open('https://twitter.com/douglasportodev', '_blank')
              }
              variant="ghost"
              leftIcon={<RiTwitterFill />}
            >
              Twitter
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Author
