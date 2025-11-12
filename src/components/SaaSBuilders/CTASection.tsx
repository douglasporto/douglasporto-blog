import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'

export function CTASection() {
  const handleCTAClick = () => {
    window.open(
      'https://onetwo-tech.baseportal.io/forms/68a48aae-dc8a-4af2-9053-c234a72d4b20',
      '_blank'
    )
  }

  return (
    <Box
      as="section"
      py={{ base: 20, md: 24 }}
      bg="linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        bgImage="repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)"
      />

      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack spacing={10} align="center" w="100%">
          {/* Main Heading */}
          <Box textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="black"
              color="white"
              mb={6}
            >
              ⚡ Decisão Rápida = Resultados Rápidos
            </Heading>
          </Box>

          {/* Options */}
          <Box maxW="900px" mx="auto" w="100%">
            <VStack spacing={6} align="center" w="100%">
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="white"
                textAlign="center"
                fontWeight="medium"
              >
                Você tem duas opções agora:
              </Text>

              <Box
                p={6}
                bg="rgba(255, 255, 255, 0.1)"
                borderRadius="lg"
                border="2px solid"
                borderColor="red.400"
                w="100%"
              >
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="white"
                  lineHeight="tall"
                >
                  <strong>Opção 1:</strong> Continuar consumindo conteúdo grátis
                  no YouTube, tentando juntar os pedaços sozinho, gastando meses
                  em código que ninguém vai usar.
                </Text>
              </Box>

              <Box
                p={6}
                bg="rgba(34, 197, 94, 0.2)"
                borderRadius="lg"
                border="3px solid"
                borderColor="green.400"
                w="100%"
              >
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="white"
                  lineHeight="tall"
                >
                  <strong>Opção 2:</strong> Entrar numa comunidade com método
                  comprovado, templates prontos e mentoria de quem já fez 3x.
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Price Value Prop */}
          <VStack spacing={4}>
            <Heading
              size="lg"
              textAlign="center"
              color="white"
              fontWeight="bold"
            >
              Por menos que uma pizza por mês, você pode finalmente ter seu
              SaaS.
            </Heading>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="purple.200"
              textAlign="center"
              fontWeight="medium"
            >
              As 7 vagas gratuitas vão acabar HOJE.
              <br />
              (Este contador é atualizado em tempo real)
            </Text>
          </VStack>

          {/* Main CTA Button */}
          <VStack spacing={4}>
            <Button
              size="lg"
              fontSize={{ base: 'lg', md: 'xl' }}
              px={{ base: 10, md: 16 }}
              py={{ base: 8, md: 10 }}
              bg="orange"
              color="white"
              _hover={{
                bg: 'orange.500',
                transform: 'scale(1.05)',
                boxShadow: '0 20px 40px rgba(251, 146, 60, 0.5)'
              }}
              _active={{
                transform: 'scale(0.98)'
              }}
              onClick={handleCTAClick}
              transition="all 0.3s ease"
              boxShadow="0 16px 32px rgba(251, 146, 60, 0.4)"
              borderRadius="full"
              fontWeight="black"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              GARANTIR MINHA VAGA AGORA →
            </Button>
          </VStack>

          {/* PS Messages */}
          <VStack
            spacing={6}
            maxW="800px"
            mx="auto"
            pt={8}
            borderTop="2px solid"
            borderColor="whiteAlpha.300"
          >
            <Box>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="white"
                lineHeight="tall"
              >
                <strong>PS:</strong> Lembra quando você sonhava em ter um
                produto próprio, com MRR, trabalhando de onde quiser?
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="purple.200"
                lineHeight="tall"
                mt={2}
              >
                Chegou a hora de parar de sonhar e começar a construir.
              </Text>
            </Box>

            <Box>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="white"
                lineHeight="tall"
              >
                <strong>PPS:</strong> Daqui 90 dias você pode estar com seu
                primeiro SaaS faturando. Ou pode estar no mesmo lugar, só
                assistindo os outros crescerem.
              </Text>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="white"
                fontWeight="bold"
                mt={3}
                textAlign="center"
              >
                A escolha é sua.
              </Text>
            </Box>
          </VStack>

          {/* Final CTA */}
          <VStack spacing={2} pt={4}>
            <Button
              size="lg"
              fontSize={{ base: 'md', md: 'lg' }}
              px={12}
              py={8}
              bg="red.500"
              color="white"
              _hover={{
                bg: 'red.600',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 24px rgba(239, 68, 68, 0.4)'
              }}
              onClick={handleCTAClick}
              transition="all 0.3s ease"
              borderRadius="full"
              fontWeight="bold"
              textTransform="uppercase"
              animation="pulse 2s infinite"
            >
              ÚLTIMA CHANCE - ENTRAR AGORA →
            </Button>
          </VStack>
        </VStack>
      </Container>

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </Box>
  )
}
