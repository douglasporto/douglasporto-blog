import { MdCheckCircle } from 'react-icons/md'

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import Meta from 'components/meta'

import { ScheduleMeetingButton } from '@/components/ScheduleMeetingButton/ScheduleMeetingButton'

export default function ThankYouPage() {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'gray.100')
  const primaryColor = useColorModeValue('blue.500', 'orange.400')

  return (
    <>
      <Meta />
      <Box minH="100vh" bg={bg} display="flex" alignItems="center" py={16}>
        <Container maxW="2xl">
          <VStack spacing={8} textAlign="center">
            <Text fontSize="6xl" role="img" aria-label="celebration">
              🎉
            </Text>

            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              color={color}
            >
              Parabéns! Você Deu o Primeiro Passo
            </Heading>

            <Text fontSize={{ base: 'lg', lg: 'xl' }} color={color}>
              Enviei os materiais gratuitos para seu email. Verifique sua caixa
              de entrada (e a pasta de spam também).
            </Text>

            <Box bg={cardBg} p={8} borderRadius="xl" boxShadow="lg" w="full">
              <Heading as="h2" fontSize="2xl" mb={6} color={color}>
                Enquanto isso:
              </Heading>

              <List spacing={4} textAlign="left">
                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon
                    as={MdCheckCircle}
                    color={primaryColor}
                    fontSize="xl"
                    mt={1}
                  />
                  <Text color={color}>
                    Me siga no Instagram para conteúdo diário sobre SaaS
                  </Text>
                </ListItem>

                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon
                    as={MdCheckCircle}
                    color={primaryColor}
                    fontSize="xl"
                    mt={1}
                  />
                  <Text color={color}>
                    Salve meu email (contato@douglasporto.com.br) nos contatos
                  </Text>
                </ListItem>

                <ListItem display="flex" alignItems="flex-start">
                  <ListIcon
                    as={MdCheckCircle}
                    color={primaryColor}
                    fontSize="xl"
                    mt={1}
                  />
                  <Text color={color}>
                    Explore os materiais com calma e comece a aplicar
                  </Text>
                </ListItem>
              </List>
            </Box>

            <HStack
              spacing={4}
              flexDirection={{ base: 'column', md: 'row' }}
              w={{ base: 'full', md: 'auto' }}
            >
              <Button
                variant="ghost"
                as="a"
                href="https://instagram.com/douglasaaaporto"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                px={8}
                py={6}
                fontSize="lg"
                w={{ base: 'full', md: 'auto' }}
              >
                Seguir no Instagram
              </Button>

              <ScheduleMeetingButton variant="outline" size="lg" />
            </HStack>

            <Text
              as="a"
              href="/"
              color={color}
              fontSize="md"
              cursor="pointer"
              _hover={{ color: primaryColor }}
            >
              ← Voltar para o início
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
