import { Box, Heading, HStack, Progress, Text, VStack } from '@chakra-ui/react'

interface VacancyTier {
  name: string
  color: string
  progressColor: string
  current: number
  total: number
  price: string
  status: 'active' | 'upcoming' | 'future'
}

const vacancyTiers: VacancyTier[] = [
  {
    name: 'VAGAS GRATUITAS (LIFETIME)',
    color: 'red.500',
    progressColor: 'red',
    current: 3,
    total: 10,
    price: 'GRÁTIS',
    status: 'active'
  },
  {
    name: 'VAGAS FOUNDERS (R$39,90/mês)',
    color: 'orange.500',
    progressColor: 'orange',
    current: 0,
    total: 40,
    price: 'R$ 39,90/mês',
    status: 'upcoming'
  },
  {
    name: 'PREÇO NORMAL (R$59,90/mês)',
    color: 'gray.500',
    progressColor: 'gray',
    current: 0,
    total: 0,
    price: 'R$ 59,90/mês',
    status: 'future'
  }
]

export function VacancyCounter() {
  return (
    <Box
      w="100%"
      maxW="800px"
      mx="auto"
      p={8}
      bg="white"
      _dark={{ bg: 'gray.800', borderColor: 'orange.500' }}
      borderRadius="xl"
      boxShadow="2xl"
      border="2px solid"
      borderColor="orange.400"
    >
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading
            size="md"
            color="orange.500"
            _dark={{ color: 'orange.400' }}
            mb={2}
          >
            ⚠️ VAGAS LIMITADAS - ATUALIZAÇÃO EM TEMPO REAL
          </Heading>
        </Box>

        {vacancyTiers.map((tier, index) => (
          <VStack key={index} spacing={3} align="stretch">
            <HStack justify="space-between">
              <HStack>
                <Box
                  w={3}
                  h={3}
                  borderRadius="full"
                  bg={tier.color}
                  animation={
                    tier.status === 'active' ? 'pulse 2s infinite' : undefined
                  }
                />
                <Text
                  fontWeight="bold"
                  fontSize="sm"
                  color="gray.700"
                  _dark={{ color: 'gray.200' }}
                >
                  {tier.name}
                </Text>
              </HStack>
              {tier.total > 0 && (
                <Text
                  fontWeight="bold"
                  fontSize="sm"
                  color={tier.color}
                  _dark={{ color: tier.color }}
                >
                  {tier.current}/{tier.total} preenchidas
                </Text>
              )}
            </HStack>

            {tier.total > 0 ? (
              <Progress
                value={(tier.current / tier.total) * 100}
                size="lg"
                colorScheme={tier.progressColor}
                borderRadius="full"
                bg="gray.200"
                _dark={{ bg: 'gray.700' }}
              />
            ) : (
              <Text
                fontSize="sm"
                color="gray.600"
                _dark={{ color: 'gray.400' }}
                fontStyle="italic"
              >
                Disponível após 50 membros
              </Text>
            )}
          </VStack>
        ))}
      </VStack>

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </Box>
  )
}
