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
          <p>Senior Developer Engineer and Tech lead</p>
          <Box pt={4} pb={4}>
            {/* Douglas é um desenvolvedor freelancer full-stack, residente no Brasil e apaixonado pela criação de serviços e produtos digitais.
                Ele se entusiasma com todos os aspectos relacionados ao lançamento de produtos, abrangendo desde o planejamento e o design até a resolução de problemas concretos por meio da programação.
                No momento, está empenhado em projetos pessoais e na sua empresa de consultoria especializada no desenvolvimento de software.
                Casado e pai de dois filhos, Douglas prioriza também momentos de qualidade ao lado da família.
                É um amante por futebol, cinema e séries de TV. Além disso, pratica maratonas amadoramente e tem um gosto diversificado por esportes.
            */}

            <Text as="span" fontSize="md">
              Douglas is a freelance full-stack developer, living in Brazil and
              passionate about creating digital services and products. He is
              excited about all aspects of product launch, covering everything
              from planning and design to solving concrete problems through
              programming.
              <br />
              Currently, he is dedicated to personal projects and his consulting
              firm specialized in software development.
              <br />
              Married and a father of two, Douglas also prioritizes quality
              moments with his family. He is a lover of soccer, cinema, and TV
              series. Additionally, he practices marathons as an amateur and has
              a diversified taste for sports.
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
            <BioYear>2022 - to present</BioYear>
            <BioDescription>
              Tech lead and Founder at{' '}
              <a
                href="https://onetwo.services"
                target="_blank"
                rel="noreferrer"
              >
                One Two Tech
              </a>
            </BioDescription>
          </Box>
          <Box>
            <BioYear>2019 - 2024</BioYear>
            <BioDescription>
              Senior fullstack Developer at Fabapp
            </BioDescription>
          </Box>
          <Box>
            <BioYear>2010 - 2019</BioYear>
            <BioDescription>Web fullstack Developer at Uranet</BioDescription>
          </Box>
          <Box>
            <BioYear>2009 - 2011</BioYear>
            <BioDescription>
              Graduated in Analysis and System Development
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
