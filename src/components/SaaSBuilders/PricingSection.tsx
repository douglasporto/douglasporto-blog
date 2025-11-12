import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

const pricingTiers = [
  {
    name: 'PRIMEIROS 10 MEMBROS',
    price: 'GRÁTIS',
    subtitle: 'PARA SEMPRE!',
    badge: '⚡ URGENTE: Restam apenas 7 vagas',
    features: [
      'Participação ativa na comunidade',
      'Feedback honesto sobre o programa',
      'Depoimento após 30 dias',
      'Case de sucesso quando lançar'
    ],
    color: 'red',
    highlight: true,
    buttonText: 'GARANTIR VAGA GRATUITA'
  },
  {
    name: 'PRÓXIMOS 40 MEMBROS',
    price: 'R$ 39,90',
    subtitle: '/mês',
    badge: 'Preço especial de Founder - Garantido lifetime',
    features: [
      'Menos que uma assinatura de Netflix',
      'Acesso a todo conteúdo e mentorias',
      'Preço nunca aumenta para você',
      'Todos os bônus de founder'
    ],
    color: 'orange',
    highlight: false,
    buttonText: 'GARANTIR PREÇO ESPECIAL'
  },
  {
    name: 'APÓS 50 MEMBROS',
    price: 'R$ 59,90',
    subtitle: '/mês',
    badge: 'Preço normal da comunidade',
    features: [
      'Acesso completo à comunidade',
      'Todas as mentorias ao vivo',
      'Templates e recursos',
      'Suporte no Discord'
    ],
    color: 'purple',
    highlight: false,
    buttonText: 'ENTRAR NA LISTA DE ESPERA'
  }
]

const comparisons = [
  {
    option: 'Curso de SaaS comum',
    price: 'R$ 2.997',
    details: '(só vídeos gravados)',
    available: false
  },
  {
    option: 'Mentoria individual',
    price: 'R$ 500/hora',
    details: '',
    available: false
  },
  {
    option: 'Bootcamp presencial',
    price: 'R$ 8.000+',
    details: '',
    available: false
  },
  {
    option: 'SaaS Builders Brasil',
    price: 'R$ 39,90/mês',
    details: '(ou GRÁTIS!)',
    available: true
  }
]

export function PricingSection() {
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
              🔥 Oferta de Lançamento Por Tempo Limitado
            </Heading>
          </Box>

          {/* Pricing Cards */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={8}
            w="100%"
            justifyItems="center"
          >
            {pricingTiers.map((tier, index) => {
              // Define colors based on tier
              const bgLight =
                tier.color === 'red'
                  ? 'red.50'
                  : tier.color === 'orange'
                  ? 'orange.50'
                  : tier.color === 'purple'
                  ? 'purple.50'
                  : 'gray.50'

              const bgDark =
                tier.color === 'red'
                  ? 'red.800'
                  : tier.color === 'orange'
                  ? 'gray.700'
                  : tier.color === 'purple'
                  ? 'gray.700'
                  : 'gray.700'

              const borderLight =
                tier.color === 'red'
                  ? 'red.400'
                  : tier.color === 'orange'
                  ? 'orange.400'
                  : tier.color === 'purple'
                  ? 'purple.400'
                  : 'gray.400'

              const borderDark =
                tier.color === 'red'
                  ? 'red.600'
                  : tier.color === 'orange'
                  ? 'orange.600'
                  : tier.color === 'purple'
                  ? 'purple.600'
                  : 'gray.600'

              const textLight =
                tier.color === 'red'
                  ? 'red.700'
                  : tier.color === 'orange'
                  ? 'orange.700'
                  : tier.color === 'purple'
                  ? 'purple.700'
                  : 'gray.700'

              const textDark =
                tier.color === 'red'
                  ? 'red.300'
                  : tier.color === 'orange'
                  ? 'orange.300'
                  : tier.color === 'purple'
                  ? 'purple.300'
                  : 'gray.300'

              const priceLight =
                tier.color === 'red'
                  ? 'red.600'
                  : tier.color === 'orange'
                  ? 'orange.600'
                  : tier.color === 'purple'
                  ? 'purple.600'
                  : 'gray.600'

              const priceDark =
                tier.color === 'red'
                  ? 'red.400'
                  : tier.color === 'orange'
                  ? 'orange.400'
                  : tier.color === 'purple'
                  ? 'purple.400'
                  : 'gray.400'

              const buttonBg =
                tier.color === 'red'
                  ? 'red.500'
                  : tier.color === 'orange'
                  ? 'orange.500'
                  : tier.color === 'purple'
                  ? 'purple.500'
                  : 'gray.500'

              const buttonHover =
                tier.color === 'red'
                  ? 'red.600'
                  : tier.color === 'orange'
                  ? 'orange.600'
                  : tier.color === 'purple'
                  ? 'purple.600'
                  : 'gray.600'

              return (
                <Box
                  key={index}
                  p={8}
                  bg={bgLight}
                  _dark={{
                    bg: bgDark,
                    borderColor: borderDark
                  }}
                  borderRadius="xl"
                  boxShadow={tier.highlight ? '2xl' : 'lg'}
                  border={tier.highlight ? '4px solid' : '2px solid'}
                  borderColor={borderLight}
                  transform={tier.highlight ? 'scale(1.05)' : 'scale(1)'}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: tier.highlight ? 'scale(1.08)' : 'scale(1.03)'
                  }}
                  position="relative"
                  w="100%"
                  maxW={{ base: '400px', md: '100%' }}
                >
                  {tier.highlight && (
                    <Box
                      position="absolute"
                      top="-4"
                      left="50%"
                      transform="translateX(-50%)"
                      bg="red.500"
                      color="white"
                      px={4}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="bold"
                      textTransform="uppercase"
                    >
                      Melhor Oferta
                    </Box>
                  )}

                  <VStack spacing={6} align="stretch">
                    {/* Tier Name */}
                    <Heading
                      size="sm"
                      textAlign="center"
                      color={textLight}
                      _dark={{ color: textDark }}
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      {tier.name}
                    </Heading>

                    {/* Price */}
                    <Box textAlign="center">
                      <Heading
                        fontSize="4xl"
                        fontWeight="black"
                        color={priceLight}
                        _dark={{ color: priceDark }}
                      >
                        {tier.price}
                      </Heading>
                      <Text
                        fontSize="lg"
                        color="gray.600"
                        _dark={{ color: 'gray.400' }}
                        fontWeight="bold"
                      >
                        {tier.subtitle}
                      </Text>
                    </Box>

                    {/* Badge */}
                    <Box
                      p={3}
                      bg="white"
                      _dark={{ bg: 'gray.800' }}
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color={priceLight}
                        _dark={{ color: priceDark }}
                      >
                        {tier.badge}
                      </Text>
                    </Box>

                    {/* Features */}
                    <VStack spacing={3} align="stretch">
                      {tier.features.map((feature, featureIndex) => (
                        <HStack key={featureIndex} align="start">
                          <Text
                            fontSize="lg"
                            color={priceLight}
                            _dark={{ color: priceDark }}
                          >
                            ✓
                          </Text>
                          <Text
                            fontSize="sm"
                            color="gray.700"
                            _dark={{ color: 'gray.300' }}
                          >
                            {feature}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>

                    {/* CTA Button */}
                    <Button
                      size="md"
                      bg={buttonBg}
                      color="white"
                      _hover={{
                        bg: buttonHover,
                        transform: 'translateY(-2px)'
                      }}
                      onClick={handleCTAClick}
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="xs"
                    >
                      {tier.buttonText}
                    </Button>
                  </VStack>
                </Box>
              )
            })}
          </SimpleGrid>

          {/* Comparison Table */}
          <Box
            maxW="800px"
            mx="auto"
            p={8}
            bg="gray.50"
            _dark={{ bg: 'gray.700' }}
            borderRadius="xl"
            mt={8}
          >
            <Heading
              size="md"
              textAlign="center"
              mb={6}
              color="gray.800"
              _dark={{ color: 'white' }}
            >
              Compare Com Outras Opções:
            </Heading>

            <VStack spacing={4} align="stretch">
              {comparisons.map((comparison, index) => (
                <HStack
                  key={index}
                  justify="space-between"
                  p={4}
                  bg={comparison.available ? 'green.50' : 'white'}
                  _dark={{
                    bg: comparison.available ? 'green.900' : 'gray.800',
                    borderColor: comparison.available ? 'green.600' : 'gray.600'
                  }}
                  borderRadius="md"
                  border="2px solid"
                  borderColor={comparison.available ? 'green.400' : 'gray.200'}
                >
                  <HStack>
                    <Text fontSize="xl">
                      {comparison.available ? '✅' : '❌'}
                    </Text>
                    <VStack align="start" spacing={0}>
                      <Text
                        fontWeight={comparison.available ? 'bold' : 'medium'}
                        color="gray.800"
                        _dark={{ color: 'gray.200' }}
                      >
                        {comparison.option}
                      </Text>
                      {comparison.details && (
                        <Text
                          fontSize="xs"
                          color="gray.600"
                          _dark={{ color: 'gray.400' }}
                        >
                          {comparison.details}
                        </Text>
                      )}
                    </VStack>
                  </HStack>
                  <Text
                    fontWeight="bold"
                    color={comparison.available ? 'green.600' : 'gray.600'}
                    _dark={{
                      color: comparison.available ? 'green.400' : 'gray.400'
                    }}
                  >
                    {comparison.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* Final CTA */}
          <VStack spacing={4} pt={8}>
            <Button
              size="lg"
              fontSize={{ base: 'md', md: 'lg' }}
              px={12}
              py={8}
              bg="orange"
              color="white"
              _hover={{
                bg: 'orange.500',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 24px rgba(251, 146, 60, 0.4)'
              }}
              onClick={handleCTAClick}
              transition="all 0.3s ease"
              borderRadius="full"
              fontWeight="bold"
              textTransform="uppercase"
              boxShadow="0 8px 16px rgba(251, 146, 60, 0.3)"
            >
              QUERO GARANTIR MEU PREÇO ESPECIAL →
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
