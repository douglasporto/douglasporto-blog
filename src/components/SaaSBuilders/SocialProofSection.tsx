import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

const metrics = [
  {
    title: 'Baseportal',
    stats: [
      '500+ usuários ativos',
      'MRR crescendo 20% ao mês',
      'De 0 para produto em 90 dias',
      'Stack: Next.js + Supabase + Stripe'
    ],
    icon: '📊',
    color: 'blue'
  },
  {
    title: 'FansDeck',
    stats: [
      'Ideia validada em 7 dias',
      'Primeiro cliente pagante em 14 dias',
      'Break-even em 60 dias',
      '100% bootstrapped'
    ],
    icon: '💰',
    color: 'green'
  },
  {
    title: 'Soulmi Health',
    stats: [
      'R$1.000.000+ em faturamento total',
      '10.000+ usuários atendidos',
      'Exit bem-sucedido',
      'Case de sucesso na pandemia'
    ],
    icon: '🏆',
    color: 'purple'
  }
]

export function SocialProofSection() {
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
              Meus Números Reais (Pode Verificar)
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              _dark={{ color: 'gray.400' }}
            >
              Não é teoria. São resultados concretos de SaaS que eu construí e
              escalo.
            </Text>
          </Box>

          {/* Metrics Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={8}
            w="100%"
            justifyItems="center"
          >
            {metrics.map((metric, index) => (
              <Box
                key={index}
                p={8}
                bg="white"
                _dark={{ bg: 'gray.800', borderColor: `${metric.color}.700` }}
                borderRadius="xl"
                boxShadow="xl"
                border="3px solid"
                borderColor={`${metric.color}.200`}
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl',
                  borderColor: `${metric.color}.400`
                }}
                w="100%"
                maxW={{ base: '400px', md: '100%' }}
              >
                <VStack spacing={4} align="stretch">
                  {/* Icon & Title */}
                  <Box textAlign="center">
                    <Text fontSize="5xl" mb={2}>
                      {metric.icon}
                    </Text>
                    <Heading
                      size="lg"
                      color={`${metric.color}.700`}
                      _dark={{ color: `${metric.color}.300` }}
                    >
                      {metric.title}
                    </Heading>
                  </Box>

                  {/* Stats List */}
                  <VStack spacing={3} align="stretch" pt={4}>
                    {metric.stats.map((stat, statIndex) => (
                      <Box
                        key={statIndex}
                        p={3}
                        bg={`${metric.color}.50`}
                        _dark={{ bg: `${metric.color}.900` }}
                        borderRadius="md"
                      >
                        <Text
                          fontSize="sm"
                          color="gray.700"
                          _dark={{ color: 'gray.300' }}
                          fontWeight="medium"
                          textAlign="center"
                        >
                          {stat}
                        </Text>
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Proof Placeholder */}
          <Box
            maxW="800px"
            mx="auto"
            p={8}
            bg="purple.50"
            _dark={{ bg: 'purple.900', borderColor: 'purple.600' }}
            borderRadius="xl"
            border="2px dashed"
            borderColor="purple.300"
          >
            <VStack spacing={4}>
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="purple.700"
                _dark={{ color: 'purple.300' }}
                textAlign="center"
              >
                📸 Prints dos Dashboards | Screenshots do Stripe | Depoimentos
              </Text>
              <Text
                fontSize="sm"
                color="gray.600"
                _dark={{ color: 'gray.400' }}
                textAlign="center"
              >
                [Aqui você pode adicionar prints reais dos dashboards do Stripe,
                analytics, e depoimentos de beta testers quando disponíveis]
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
