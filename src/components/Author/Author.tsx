import React from 'react'
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiInstagramFill
} from 'react-icons/ri'

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

import { ScheduleMeetingButton } from '@/components/ScheduleMeetingButton/ScheduleMeetingButton'

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
        Olá! Ajudo founders a tirarem suas ideias do papel e transformarem em
        SaaS validados e lucrativos.
      </Box>

      <Box>
        <Box display="flex" flexDirection="column" alignItems="center" mb={6}>
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            boxSize="150px"
            objectFit="cover"
            display="inline-block"
            borderRadius="full"
            src="/assets/profile/douglas-porto.png"
            alt="Foto de perfil"
            mb={4}
          />
          <Heading
            as="h2"
            variant="page-title"
            background={gradientColors}
            backgroundClip="text"
            textAlign="center"
          >
            Douglas Porto
          </Heading>
          <Text textAlign="center" mt={2}>
            Head de Tecnologia • Fundador de SaaS
          </Text>
        </Box>

        <Box pt={4} pb={4}>
          <Text as="span" fontSize="md">
            Sou Douglas Porto, Head de Tech com 15 anos de experiência em
            tecnologia, ajudando founders a tirarem suas ideias do papel e
            transformarem em SaaS validados e lucrativos.
            <br />
            <br />
            Minha trajetória começou em 2010 como programador em uma empresa de
            sistemas para call center, onde evoluí até líder técnico, cuidando
            de clientes como Bradesco Promotora.
            <br />
            <br />
            Na Fábrica de Aplicativos, fui premiado como FabStar (funcionário do
            ano) no meu primeiro ano e me tornei acionista da empresa.
            <br />
            <br />
            Depois fundei a OneTwo Tech, uma software house onde lideramos o
            desenvolvimento da Soulmi Health, um sistema milionário de gestão de
            testes de COVID para os Estados Unidos. Por 2 anos, fui líder
            técnico de toda a estrutura tecnológica dessa operação.
            <br />
            <br />
            Hoje sou fundador da <strong>Baseportal</strong> (plataforma
            no-code/low-code com IA e automações) e da <strong>FansDeck</strong>{' '}
            (solução para criadores monetizarem comunidades). Já ajudei +1000
            founders a validarem, construírem e escalarem seus produtos
            digitais.
            <br />
            <br />
            Minha missão é guiar você nessa jornada — da ideia aos primeiros
            clientes pagantes. Através de mentorias práticas, ensino como
            validar ideias, escolher a stack certa, construir MVPs e criar
            estratégias de lançamento que funcionam.
            <br />
            <br />
            Maratonista amador, marido e pai de duas crianças. Aplico no
            trabalho o mesmo princípio que me guia no esporte: disciplina e
            consistência para alcançar grandes conquistas.
          </Text>
        </Box>

        <Box display="flex" justifyContent="center" mb={6}>
          <ScheduleMeetingButton />
        </Box>
      </Box>
      <Box
        maxWidth="100%"
        background="rgba(255, 255, 255, 0.05)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        borderRadius="12px"
        padding="12px"
        backdropFilter="blur(6px)"
        boxShadow="0 4px 20px rgba(0,0,0,0.2)"
        marginBottom="12px"
      >
        <iframe
          src="https://douglasporto.substack.com/embed"
          width="100%"
          height="150"
          style={{
            border: 0,
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)'
          }}
          frameBorder="0"
        />
      </Box>

      <Box borderRadius="lg" mb={12}>
        <Heading
          as="h3"
          fontSize="lg"
          color={useColorModeValue('primary.light', 'primary.main')}
          mb={4}
        >
          Linha do Tempo
        </Heading>
        <Stack spacing={4}>
          <Box>
            <BioYear>2025 - Presente</BioYear>
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
              Fundador da{' '}
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
            <BioDescription>Tech Lead Fábrica de aplicativos</BioDescription>
          </Box>
          <Box>
            <BioYear>2010 - 2019</BioYear>
            <BioDescription>
              Desenvolvedor Web Fullstack na Konecta
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
          mb={4}
        >
          Na Web
        </Heading>
        <Stack spacing={4}>
          <Box ml={6} display="flex" flexDirection="column" alignItems="start">
            <Button
              onClick={() =>
                window.open('https://instagram.com/douglasaaaporto', '_blank')
              }
              variant="ghost"
              leftIcon={<RiInstagramFill />}
            >
              Instagram
            </Button>
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
