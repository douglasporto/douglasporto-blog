import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

const personas = [
  {
    emoji: '🎯',
    title: 'O Junior/Pleno Ambicioso',
    quote: '"Sei codar, mas não sei transformar código em negócio"',
    solution: '→ Vou te ensinar a validar, precificar e vender',
    color: 'blue'
  },
  {
    emoji: '💼',
    title: 'O Senior Cansado',
    quote: '"Já tentei 3x, sempre morro após o lançamento"',
    solution: '→ Vou te mostrar onde você errou e como escalar',
    color: 'purple'
  },
  {
    emoji: '💰',
    title: 'O Freelancer Saturado',
    quote: '"Quero sair do tempo por dinheiro para MRR"',
    solution: '→ Vou te dar os templates e processos prontos',
    color: 'green'
  }
]

export function TargetAudienceSection() {
  const handleCTAClick = () => {
    window.open(
      'https://onetwo-tech.baseportal.io/forms/68a48aae-dc8a-4af2-9053-c234a72d4b20',
      '_blank'
    )
  }

  return (
    <Box
      as="section"
      py={{ base: 16, md: 20 }}
      bg="gray.50"
      _dark={{ bg: 'gray.900' }}
    >
      <Container maxW="1200px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={12} align="center" w="100%">
          {/* Section Title */}
          <Box textAlign="center" px={{ base: 4, md: 0 }}>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
              color="gray.800"
              _dark={{ color: 'white' }}
              mb={4}
            >
              Esta Comunidade é Para 3 Tipos de Dev:
            </Heading>
          </Box>

          {/* Persona Cards */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={8}
            w="100%"
            justifyItems="center"
          >
            {personas.map((persona, index) => (
              <Box
                key={index}
                p={8}
                bg="white"
                _dark={{ bg: 'gray.800', borderColor: `${persona.color}.700` }}
                borderRadius="xl"
                boxShadow="lg"
                border="2px solid"
                borderColor={`${persona.color}.200`}
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl',
                  borderColor: `${persona.color}.400`
                }}
                w="100%"
                maxW={{ base: '400px', md: '100%' }}
              >
                <VStack spacing={4} align="stretch" h="100%">
                  {/* Emoji */}
                  <Text fontSize="5xl" textAlign="center">
                    {persona.emoji}
                  </Text>

                  {/* Title */}
                  <Heading
                    size="md"
                    textAlign="center"
                    color={`${persona.color}.700`}
                    _dark={{ color: `${persona.color}.300` }}
                  >
                    {persona.title}
                  </Heading>

                  {/* Quote */}
                  <Box
                    p={4}
                    bg={`${persona.color}.50`}
                    _dark={{ bg: `${persona.color}.900` }}
                    borderRadius="md"
                    borderLeft="4px solid"
                    borderColor={`${persona.color}.400`}
                  >
                    <Text
                      fontSize="md"
                      fontStyle="italic"
                      color="gray.700"
                      _dark={{ color: 'gray.300' }}
                    >
                      {persona.quote}
                    </Text>
                  </Box>

                  {/* Solution */}
                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                    color={`${persona.color}.600`}
                    _dark={{ color: `${persona.color}.400` }}
                    mt="auto"
                  >
                    {persona.solution}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* CTA */}
          <VStack spacing={4} pt={8}>
            <Button
              size="lg"
              fontSize={{ base: 'md', md: 'lg' }}
              px={8}
              py={6}
              bg="orange.400"
              color="white"
              _hover={{
                bg: 'orange.500',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 16px rgba(251, 146, 60, 0.3)'
              }}
              onClick={handleCTAClick}
              transition="all 0.3s ease"
              borderRadius="full"
              fontWeight="bold"
              textTransform="uppercase"
            >
              É SOBRE MIM! QUERO ENTRAR →
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
