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
  const gradientColors = useColorModeValue(
    'linear-gradient(135deg, #2563EB, #3B82F6, #60A5FA)',
    'linear-gradient(135deg, #F97316, #FB923C, #FED7AA)'
  )

  return (
    <>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Olá! Eu ajudo empresas e criadores a transformarem ideias em negócios
        digitais de sucesso.
      </Box>

      <Box display="flex">
        <Box flexGrow={1}>
          <Heading
            as="h2"
            variant="page-title"
            background={gradientColors}
            backgroundClip="text"
          >
            Douglas Porto
          </Heading>
          <p>Head de Tecnologia • Criador de Plataformas Digitais</p>

          <Box pt={4} pb={4}>
            <Text as="span" fontSize="md">
              Sou empreendedor e Head de Tecnologia, com mais de 15 anos
              liderando a criação de produtos digitais que geram resultados
              reais.
              <br />
              Fundador da <strong>Baseportal</strong>, um portal modular
              no-code/low-code com automações e IA, e da{' '}
              <strong>FansDeck</strong>, plataforma para criadores gerirem suas
              comunidades e conteúdos exclusivos.
              <br />
              Minha missão é guiar empresários e empreendedores na jornada de
              tirar suas ideias do papel, passando da visão à execução com
              clareza, estratégia e foco em resultados.
              <br />
              Maratonista amador, marido e pai de duas crianças, aplico no dia a
              dia o mesmo princípio que me guia no esporte: disciplina e
              consistência para alcançar grandes conquistas.
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
            alt="Foto de perfil"
          />
        </Box>
      </Box>

      <Box borderRadius="lg" mb={12}>
        <Heading
          as="h3"
          fontSize="lg"
          color={useColorModeValue('primary.light', 'primary.main')}
          variant="section-title"
        >
          Linha do Tempo
        </Heading>
        <Stack spacing={4}>
          <Box>
            <BioYear>2024 - Presente</BioYear>
            <BioDescription>
              Fundador e Head de Tecnologia na{' '}
              <a href="https://baseportal.io" target="_blank" rel="noreferrer">
                Baseportal
              </a>{' '}
              — plataforma no-code/low-code com IA e automações para empresas.
            </BioDescription>
          </Box>
          <Box>
            <BioYear>2024 - Presente</BioYear>
            <BioDescription>
              Criador da{' '}
              <a href="https://fansdeck.com" target="_blank" rel="noreferrer">
                FansDeck
              </a>{' '}
              — solução para criadores monetizarem e gerirem suas comunidades.
            </BioDescription>
          </Box>
          <Box>
            <BioYear>2022 - Presente</BioYear>
            <BioDescription>
              Tech Lead e Fundador da{' '}
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
              Desenvolvedor Fullstack Sênior na Fabapp
            </BioDescription>
          </Box>
          <Box>
            <BioYear>2010 - 2019</BioYear>
            <BioDescription>
              Desenvolvedor Web Fullstack na Uranet
            </BioDescription>
          </Box>
          <Box>
            <BioYear>2009 - 2011</BioYear>
            <BioDescription>
              Graduado em Análise e Desenvolvimento de Sistemas
            </BioDescription>
          </Box>
        </Stack>
      </Box>

      <Box borderRadius="lg" mb={12}>
        <Heading
          as="h3"
          fontSize="lg"
          color={useColorModeValue('primary.light', 'primary.main')}
          variant="section-title"
        >
          Na Web
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
