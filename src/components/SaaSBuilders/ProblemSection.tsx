import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

const problems = [
  'Você passa 6 meses codando sem validar',
  'Não sabe precificar seu produto',
  'Lança e não consegue os primeiros clientes',
  'Não sabe fazer marketing que converte',
  'Desiste no vale da morte (mês 3-6)'
]

const truthPoints = [
  'Validação rápida com fake doors',
  'Copywriting que vende',
  'Pricing estratégico',
  'Growth hacking barato',
  'Retenção e redução de churn'
]

export function ProblemSection() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: 20 }}
      bg="red.50"
      _dark={{ bg: 'red.900', bgGradient: 'linear(to-b, red.900, gray.900)' }}
    >
      <Container maxW="1200px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={12} align="center" w="100%">
          {/* Section Title */}
          <Box textAlign="center" px={{ base: 4, md: 0 }}>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
              color="red.800"
              _dark={{ color: 'red.200' }}
              mb={4}
            >
              Sabe Por Que Seu SaaS Nunca Sai do Papel?
            </Heading>
          </Box>

          {/* Problems List */}
          <VStack spacing={4} maxW="800px" mx="auto" w="100%">
            {problems.map((problem, index) => (
              <Box
                key={index}
                p={4}
                bg="white"
                _dark={{ bg: 'gray.800' }}
                borderRadius="lg"
                w="100%"
                borderLeft="4px solid"
                borderColor="red.500"
                boxShadow="md"
              >
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="gray.700"
                  _dark={{ color: 'gray.300' }}
                  fontWeight="medium"
                >
                  ❌ {problem}
                </Text>
              </Box>
            ))}
          </VStack>

          {/* The Truth */}
          <Box
            maxW="900px"
            mx="auto"
            p={8}
            bg="red.600"
            _dark={{ bg: 'red.800' }}
            borderRadius="xl"
            boxShadow="2xl"
          >
            <VStack spacing={6} align="stretch">
              <Heading
                size="lg"
                textAlign="center"
                color="white"
                fontWeight="black"
              >
                A Verdade Que Ninguém Te Conta:
              </Heading>

              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="bold"
                textAlign="center"
                color="white"
              >
                Código é só 20% do sucesso de um SaaS.
              </Text>

              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="red.100"
                textAlign="center"
              >
                Os outros 80% são:
              </Text>

              <VStack spacing={3} align="stretch" pt={4}>
                {truthPoints.map((point, index) => (
                  <Box key={index} display="flex" alignItems="center">
                    <Text fontSize="2xl" mr={3}>
                      ✓
                    </Text>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color="white"
                      fontWeight="medium"
                    >
                      {point}
                    </Text>
                  </Box>
                ))}
              </VStack>

              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="black"
                textAlign="center"
                color="white"
                pt={4}
              >
                E é exatamente isso que eu vou te ensinar.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
