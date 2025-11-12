import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

export function GuaranteeSection() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: 20 }}
      bg="green.50"
      _dark={{ bg: 'green.900' }}
    >
      <Container maxW="1200px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={8} align="center" w="100%">
          {/* Section Title */}
          <Box textAlign="center" px={{ base: 4, md: 0 }} w="100%">
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
              color="green.800"
              _dark={{ color: 'green.200' }}
              mb={4}
            >
              Garantia Total de 7 Dias
            </Heading>
          </Box>

          {/* Guarantee Content */}
          <Box
            maxW="800px"
            p={8}
            bg="white"
            _dark={{ bg: 'gray.800', borderColor: 'green.600' }}
            borderRadius="xl"
            boxShadow="2xl"
            border="4px solid"
            borderColor="green.400"
          >
            <VStack spacing={6}>
              <Text fontSize="6xl" textAlign="center">
                🛡️
              </Text>

              <Heading
                size="lg"
                textAlign="center"
                color="green.700"
                _dark={{ color: 'green.300' }}
              >
                Teste por 7 dias.
              </Heading>

              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                textAlign="center"
                color="gray.700"
                _dark={{ color: 'gray.300' }}
                lineHeight="tall"
              >
                Se você participar de pelo menos 1 mentoria ao vivo e não sentir
                que vale cada centavo, cancele sem burocracia.
              </Text>

              <VStack spacing={2} pt={4}>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  color="green.700"
                  _dark={{ color: 'green.300' }}
                  textAlign="center"
                >
                  Sem perguntas. Sem enrolação.
                </Text>

                <Text
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: 'gray.400' }}
                  fontStyle="italic"
                  textAlign="center"
                >
                  *Obs: Não aplicável às 10 vagas gratuitas
                </Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
