import { useEffect, useState } from 'react'

import { Box, Button, Text, VStack } from '@chakra-ui/react'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = () => {
    window.open(
      'https://onetwo-tech.baseportal.io/forms/68a48aae-dc8a-4af2-9053-c234a72d4b20',
      '_blank'
    )
  }

  if (!isVisible) return null

  return (
    <Box
      position="fixed"
      bottom={{ base: 4, md: 8 }}
      right={{ base: 4, md: 8 }}
      zIndex={1000}
      animation="slideInUp 0.5s ease-out"
    >
      <Box
        bg="orange.500"
        color="white"
        borderRadius="2xl"
        boxShadow="2xl"
        p={{ base: 4, md: 6 }}
        maxW={{ base: '280px', md: '320px' }}
        border="3px solid"
        borderColor="white"
        _hover={{
          transform: 'scale(1.05)',
          boxShadow: '0 20px 40px rgba(251, 146, 60, 0.5)'
        }}
        transition="all 0.3s ease"
        animation="float 3s ease-in-out infinite"
        cursor="pointer"
        onClick={handleCTAClick}
      >
        <VStack spacing={3}>
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="bold"
            textAlign="center"
          >
            ⚡ Apenas 7 vagas gratuitas restantes!
          </Text>
          <Button
            size="sm"
            bg="white"
            color="orange"
            fontWeight="black"
            textTransform="uppercase"
            fontSize={{ base: 'xs', md: 'sm' }}
            _hover={{
              bg: 'orange.50'
            }}
            w="100%"
          >
            GARANTIR VAGA →
          </Button>
          <Text
            fontSize="xs"
            textAlign="center"
            color="orange.100"
            fontWeight="medium"
          >
            Depois: R$ 39,90/mês
          </Text>
        </VStack>
      </Box>

      <style jsx global>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </Box>
  )
}
