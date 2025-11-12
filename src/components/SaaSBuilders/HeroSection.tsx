import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'

import { VacancyCounter } from './VacancyCounter'

export function HeroSection() {
  const handleCTAClick = () => {
    window.open(
      'https://onetwo-tech.baseportal.io/forms/68a48aae-dc8a-4af2-9053-c234a72d4b20',
      '_blank'
    )
  }

  return (
    <Box
      as="section"
      minH="100vh"
      display="flex"
      alignItems="center"
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      position="relative"
      overflow="hidden"
      py={{ base: 16, md: 20 }}
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        bgImage="repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)"
      />

      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack spacing={8} textAlign="center">
          {/* Main Heading */}
          <VStack spacing={4}>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
              fontWeight="black"
              color="white"
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
            >
              SaaS Builders Brasil 🚀
            </Heading>

            <Heading
              as="h2"
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
              fontWeight="bold"
              color="white"
              maxW="900px"
              lineHeight="1.3"
            >
              &quot;Entre GRÁTIS na Comunidade Onde Devs Constroem SaaS de
              R$10k/mês&quot;
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="purple.100"
              fontWeight="semibold"
            >
              (Apenas 10 Vagas Gratuitas - 3 Já Foram)
            </Text>
          </VStack>

          {/* Vacancy Counter */}
          <VacancyCounter />

          {/* Subheading */}
          <VStack spacing={2}>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="white"
              fontWeight="medium"
            >
              Depois das 10 vagas gratuitas: R$39,90/mês
            </Text>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="purple.100"
              maxW="600px"
            >
              O preço de uma Netflix para aprender a criar SaaS rentáveis.
            </Text>
          </VStack>

          {/* CTA Button */}
          <Button
            size="lg"
            fontSize={{ base: 'md', md: 'xl' }}
            px={{ base: 8, md: 12 }}
            py={{ base: 6, md: 8 }}
            bg="orange"
            color="white"
            _hover={{
              bg: 'orange.500',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 24px rgba(251, 146, 60, 0.4)'
            }}
            _active={{
              transform: 'translateY(0)'
            }}
            onClick={handleCTAClick}
            transition="all 0.3s ease"
            boxShadow="0 8px 16px rgba(251, 146, 60, 0.3)"
            borderRadius="full"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            GARANTIR MINHA VAGA →
          </Button>

          {/* Trust indicators */}
          <Text
            fontSize="sm"
            color="purple.200"
            fontStyle="italic"
            maxW="500px"
          >
            ✓ Sem cartão de crédito para vagas gratuitas
            <br />✓ Cancele quando quiser (vagas pagas)
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
