import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react'

const achievements = [
  {
    name: 'Baseportal',
    description: 'Plataforma no-code com IA',
    metric: 'MRR crescendo 20% ao mês'
  },
  {
    name: 'FansDeck',
    description: 'Monetização para creators',
    metric: 'Validado em 7 dias, primeiro cliente em 14 dias'
  },
  {
    name: 'Soulmi Health',
    description: 'Sistema de gestão COVID',
    metric: 'R$1M+ em faturamento total'
  }
]

export function AboutSection() {
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
      bg="white"
      _dark={{ bg: 'gray.800' }}
    >
      <Container maxW="1200px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={10} align="center" w="100%">
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
              Quem Sou Eu (E Por Que Você Deveria Me Ouvir)
            </Heading>
          </Box>

          {/* Content */}
          <VStack spacing={6} maxW="800px" mx="auto" w="100%">
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.700"
              _dark={{ color: 'gray.300' }}
              lineHeight="tall"
            >
              Eu sou <strong>Douglas Porto</strong>.
            </Text>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.700"
              _dark={{ color: 'gray.300' }}
              lineHeight="tall"
            >
              Nos últimos 3 anos, saí de dev CLT para founder de múltiplos SaaS:
            </Text>

            {/* Achievements */}
            <VStack spacing={4} align="stretch" w="100%">
              {achievements.map((achievement, index) => (
                <Box
                  key={index}
                  p={6}
                  bg="purple.50"
                  _dark={{ bg: 'purple.900', borderColor: 'purple.400' }}
                  borderRadius="lg"
                  borderLeft="4px solid"
                  borderColor="purple.500"
                >
                  <VStack align="start" spacing={2}>
                    <HStack>
                      <Text fontSize="2xl">✅</Text>
                      <Heading
                        size="md"
                        color="purple.700"
                        _dark={{ color: 'purple.300' }}
                      >
                        {achievement.name}
                      </Heading>
                    </HStack>
                    <Text
                      color="gray.700"
                      _dark={{ color: 'gray.300' }}
                      fontSize="md"
                    >
                      {achievement.description}
                    </Text>
                    <Text
                      color="gray.600"
                      _dark={{ color: 'gray.400' }}
                      fontSize="md"
                      fontWeight="semibold"
                    >
                      {achievement.metric}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </VStack>

            {/* Experience Badge */}
            <HStack
              spacing={4}
              wrap="wrap"
              justify="center"
              w="100%"
              pt={4}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <Box
                px={4}
                py={2}
                bg="purple.100"
                _dark={{ bg: 'purple.800', color: 'purple.200' }}
                borderRadius="full"
                fontWeight="bold"
                color="purple.800"
              >
                15 anos de experiência
              </Box>
              <Box
                px={4}
                py={2}
                bg="purple.100"
                _dark={{ bg: 'purple.800', color: 'purple.200' }}
                borderRadius="full"
                fontWeight="bold"
                color="purple.800"
              >
                De programador a líder técnico
              </Box>
              <Box
                px={4}
                py={2}
                bg="purple.100"
                _dark={{ bg: 'purple.800', color: 'purple.200' }}
                borderRadius="full"
                fontWeight="bold"
                color="purple.800"
              >
                De CLT a founder
              </Box>
            </HStack>

            {/* Final pitch */}
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              color="gray.800"
              _dark={{ color: 'gray.200' }}
              fontWeight="bold"
              textAlign="center"
              pt={4}
            >
              Agora vou mostrar AO VIVO, toda semana, exatamente como você pode
              fazer o mesmo.
            </Text>

            {/* CTA Button */}
            <Button
              size="lg"
              fontSize={{ base: 'md', md: 'lg' }}
              px={8}
              py={6}
              bg="purple.600"
              color="white"
              _hover={{
                bg: 'purple.700',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 16px rgba(109, 40, 217, 0.3)'
              }}
              onClick={handleCTAClick}
              transition="all 0.3s ease"
              borderRadius="full"
              fontWeight="bold"
              textTransform="uppercase"
            >
              QUERO APRENDER COM QUEM FEZ →
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
