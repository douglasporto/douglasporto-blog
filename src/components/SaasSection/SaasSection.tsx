import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

interface SaasCard {
  badge: string
  logo: string
  logoImage: string
  description: string
}

const saasData: SaasCard[] = [
  {
    badge: 'Exit',
    logo: 'Fábrica de aplicativos',
    logoImage: '/assets/img/fabapp.png',
    description: 'SaaS com MRR de 6 dígitos'
  },
  {
    badge: 'Em escala',
    logo: 'Baseportal',
    logoImage: '/assets/img/baseportal.png',
    description: 'SaaS com MRR de 4 dígitos'
  },
  {
    badge: 'Em validação',
    logo: 'Fansdeck',
    logoImage: '/assets/img/fansdeck.png',
    description: 'em validação'
  }
]

const SaasSection = () => {
  const bgCard = useColorModeValue('gray.900', 'gray.900')
  const textColor = useColorModeValue('white', 'white')

  return (
    <Box mt={12} mb={12}>
      <Heading
        as="h3"
        fontSize="lg"
        color={useColorModeValue('primary.light', 'primary.main')}
        variant="section-title"
        mb={8}
      >
        SaaS fundados e 100% validados
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {saasData.map((saas, index) => (
          <Box
            key={index}
            bg={bgCard}
            borderRadius="3xl"
            p={8}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            minH="280px"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
          >
            <Box
              bg="#4ADE80"
              color="white"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="medium"
            >
              {saas.badge}
            </Box>

            <Box my={6}>
              <Image
                src={saas.logoImage}
                alt={saas.logo}
                maxH="80px"
                objectFit="contain"
              />
            </Box>

            <Text fontSize="md" color={textColor} textAlign="center">
              {saas.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default SaasSection
