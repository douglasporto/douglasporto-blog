import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

const platformFeatures = [
  {
    image: '/assets/img/community/dashboard-saas.png',
    title: 'Dashboard Completo',
    description:
      'Acompanhe seu progresso, acesse mentorias ao vivo e veja seus resultados em tempo real'
  },
  {
    image: '/assets/img/community/community.png',
    title: 'Comunidade Ativa',
    description:
      'Conecte-se com outros builders, compartilhe experiências e cresça junto com o grupo'
  },
  {
    image: '/assets/img/community/choose.png',
    title: 'Conteúdo Estruturado',
    description:
      'Templates prontos, frameworks validados e todo material necessário para construir seu SaaS'
  }
]

export function PlatformPreviewSection() {
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
          <Box textAlign="center" maxW="800px">
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
              color="gray.800"
              _dark={{ color: 'white' }}
              mb={4}
            >
              Uma Plataforma Completa para Transformar Seu Código em Negócio
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              _dark={{ color: 'gray.400' }}
            >
              Não é só mais um curso. É uma plataforma viva com comunidade
              ativa, mentorias ao vivo e todo suporte que você precisa.
            </Text>
          </Box>

          {/* Platform Features Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 8, md: 6 }}
            w="100%"
          >
            {platformFeatures.map((feature, index) => (
              <VStack
                key={index}
                spacing={4}
                align="stretch"
                bg="white"
                _dark={{ bg: 'gray.800' }}
                p={6}
                borderRadius="xl"
                boxShadow="lg"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                {/* Image */}
                <Box
                  w="100%"
                  h="200px"
                  borderRadius="lg"
                  overflow="hidden"
                  bg="gray.100"
                  _dark={{ bg: 'gray.700' }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>

                {/* Title */}
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.800"
                  _dark={{ color: 'white' }}
                  textAlign="center"
                >
                  {feature.title}
                </Heading>

                {/* Description */}
                <Text
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: 'gray.400' }}
                  textAlign="center"
                >
                  {feature.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>

          {/* Full Width Community Image */}
          <Box
            w="100%"
            maxW="1000px"
            position="relative"
            h={{ base: '300px', md: '400px', lg: '500px' }}
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="2xl"
            mt={8}
          >
            <Image
              src="/assets/img/community/community.png"
              alt="Comunidade SaaS Builders Brasil"
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
              p={8}
            >
              <Heading
                as="h3"
                fontSize={{ base: 'xl', md: '2xl' }}
                color="white"
                textAlign="center"
              >
                Junte-se a uma comunidade de builders apaixonados por SaaS
              </Heading>
            </Box>
          </Box>

          {/* Stats */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={8}
            w="100%"
            maxW="800px"
            mt={8}
          >
            <VStack spacing={2}>
              <Heading
                fontSize="4xl"
                fontWeight="black"
                color="purple.500"
                _dark={{ color: 'purple.400' }}
              >
                24/7
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                _dark={{ color: 'gray.400' }}
                textAlign="center"
              >
                Acesso à plataforma
              </Text>
            </VStack>

            <VStack spacing={2}>
              <Heading
                fontSize="4xl"
                fontWeight="black"
                color="orange.500"
                _dark={{ color: 'orange.400' }}
              >
                4x/mês
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                _dark={{ color: 'gray.400' }}
                textAlign="center"
              >
                Mentorias ao vivo
              </Text>
            </VStack>

            <VStack spacing={2}>
              <Heading
                fontSize="4xl"
                fontWeight="black"
                color="red.500"
                _dark={{ color: 'red.400' }}
              >
                +50
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                _dark={{ color: 'gray.400' }}
                textAlign="center"
              >
                Templates e recursos
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
