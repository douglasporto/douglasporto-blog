import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

const benefits = [
  {
    icon: '📚',
    title: 'Biblioteca de Templates Prontos',
    value: 'Valor: R$5.000',
    items: [
      'Boilerplate Next.js + Stripe 100% configurado',
      'Baseportal templates no-code',
      'Landing pages que convertem 5%+',
      'Sequences de email que vendem',
      'Dashboards e componentes React'
    ],
    color: 'blue'
  },
  {
    icon: '🎯',
    title: '4 Mentorias Ao Vivo Por Mês',
    value: 'Valor: R$2.000',
    items: [
      'Build Sessions - Codifico um SaaS ao vivo (4h)',
      'Growth Hacks - Estratégias que uso nos meus SaaS',
      'Office Hours - Tiro suas dúvidas específicas',
      'Guest Founders - Convido founders que faturam 6 dígitos'
    ],
    color: 'purple'
  },
  {
    icon: '🚀',
    title: 'Método "SaaS in 30 Days"',
    value: 'Valor: R$997',
    items: [
      'Semana 1: Validação Relâmpago com Fake Doors',
      'Semana 2: MVP Funcional em 48 horas',
      'Semana 3: Primeiros 10 usuários (estratégias testadas)',
      'Semana 4: Primeira venda (scripts prontos)'
    ],
    color: 'green'
  },
  {
    icon: '👥',
    title: 'Comunidade Ativa no Discord',
    value: 'Inestimável',
    items: [
      'Mastermind groups (máximo 5 pessoas)',
      'Pair programming semanal',
      'Code reviews detalhados',
      'Parcerias entre membros',
      'Accountability partners',
      'Canal de wins para celebrar vitórias'
    ],
    color: 'orange'
  }
]

const bonuses = [
  'Acesso ao código-fonte do Baseportal',
  '1-on-1 de 30min comigo (primeiros 50)',
  'Pack com 100 ideias de SaaS validadas',
  'Gravações perpétuas de todas as mentorias'
]

export function SolutionSection() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: 20 }}
      bg="white"
      _dark={{ bg: 'gray.800' }}
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
              O Que Você Recebe Como Membro:
            </Heading>
          </Box>

          {/* Benefits Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            {benefits.map((benefit, index) => (
              <Box
                key={index}
                p={8}
                bg={`${benefit.color}.50`}
                _dark={{
                  bg: `${benefit.color}.900`,
                  borderColor: `${benefit.color}.700`
                }}
                borderRadius="xl"
                boxShadow="lg"
                border="2px solid"
                borderColor={`${benefit.color}.200`}
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '2xl'
                }}
              >
                <VStack spacing={4} align="stretch" h="100%">
                  {/* Icon & Title */}
                  <Box>
                    <Text fontSize="4xl" mb={2}>
                      {benefit.icon}
                    </Text>
                    <Heading
                      size="md"
                      color={`${benefit.color}.700`}
                      _dark={{ color: `${benefit.color}.300` }}
                      mb={1}
                    >
                      {benefit.title}
                    </Heading>
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      color={`${benefit.color}.600`}
                      _dark={{ color: `${benefit.color}.400` }}
                    >
                      {benefit.value}
                    </Text>
                  </Box>

                  {/* Items List */}
                  <VStack spacing={2} align="stretch">
                    {benefit.items.map((item, itemIndex) => (
                      <Box key={itemIndex} display="flex" alignItems="start">
                        <Text
                          fontSize="lg"
                          mr={2}
                          color={`${benefit.color}.600`}
                          _dark={{ color: `${benefit.color}.400` }}
                        >
                          •
                        </Text>
                        <Text
                          fontSize="sm"
                          color="gray.700"
                          _dark={{ color: 'gray.300' }}
                          lineHeight="tall"
                        >
                          {item}
                        </Text>
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Bonuses */}
          <Box
            maxW="900px"
            mx="auto"
            p={8}
            bg="yellow.50"
            _dark={{ bg: 'yellow.900', borderColor: 'yellow.600' }}
            borderRadius="xl"
            border="3px solid"
            borderColor="yellow.400"
            boxShadow="xl"
          >
            <VStack spacing={4} align="stretch">
              <Heading
                size="lg"
                textAlign="center"
                color="yellow.800"
                _dark={{ color: 'yellow.200' }}
              >
                🎁 BÔNUS para Membros Fundadores
              </Heading>

              <VStack spacing={3} pt={4}>
                {bonuses.map((bonus, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="start"
                    w="100%"
                    p={3}
                    bg="white"
                    _dark={{ bg: 'gray.800' }}
                    borderRadius="md"
                  >
                    <Text fontSize="xl" mr={3}>
                      ✓
                    </Text>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color="gray.700"
                      _dark={{ color: 'gray.300' }}
                      fontWeight="medium"
                    >
                      {bonus}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
