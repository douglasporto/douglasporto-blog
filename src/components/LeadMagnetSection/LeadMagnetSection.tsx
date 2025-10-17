import { useState } from 'react'

import { useRouter } from 'next/router'

import {
  Badge,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue,
  useToast,
  VStack
} from '@chakra-ui/react'

const materials = [
  {
    icon: '📝',
    tag: 'MAIS BAIXADO',
    title: 'Checklist: Valide Seu SaaS em 7 Dias',
    description:
      'Passo a passo completo para validar sua ideia antes de construir'
  },
  {
    icon: '🛠️',
    tag: 'ATUALIZADO 2025',
    title: 'Stack Completa Para Criar SaaS',
    description:
      'Todas as ferramentas que uso (frontend, backend, infra, pagamentos)'
  },
  {
    icon: '📊',
    // tag: 'EXCLUSIVO',
    tag: 'Em construção',
    title: 'Calculadora de Viabilidade',
    description: 'Descubra se seu SaaS é viável financeiramente em 5 minutos'
  }
]

export default function LeadMagnetSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    newsletter: false
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({ name: '', email: '' })
  const router = useRouter()
  const toast = useToast()

  const cardBg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const inputBg = useColorModeValue('gray.50', 'whiteAlpha.100')
  const inputTextColor = useColorModeValue('gray.900', 'white')
  const materialBg = useColorModeValue('white', 'whiteAlpha.200')

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({ name: '', email: '' })

    // Validação
    let hasError = false
    if (!formData.name.trim()) {
      setErrors((prev) => ({ ...prev, name: 'Nome é obrigatório' }))
      hasError = true
    }
    if (!formData.email.trim()) {
      setErrors((prev) => ({ ...prev, email: 'Email é obrigatório' }))
      hasError = true
    } else if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Email inválido' }))
      hasError = true
    }

    if (hasError) return

    setLoading(true)

    try {
      const response = await fetch('/api/subscribe-brevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar formulário')
      }

      toast({
        title: 'Sucesso!',
        description: data.message,
        status: 'success',
        duration: 5000,
        isClosable: true
      })

      router.push('/obrigado')
    } catch (err) {
      toast({
        title: 'Erro',
        description:
          err instanceof Error ? err.message : 'Erro ao enviar formulário',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      as="section"
      id="newsletter"
      borderRadius="lg"
      p={{ base: 4, md: 8 }}
      mb={12}
      bg={cardBg}
    >
      <Heading
        as="h3"
        fontSize="lg"
        color={useColorModeValue('primary.light', 'primary.main')}
        variant="section-title"
        mb={6}
      >
        📚 Materiais Gratuitos para Criar Seu SaaS
      </Heading>

      <Text mb={8} color={textColor}>
        Baixe materiais práticos que usei para construir Baseportal e FansDeck
        do zero
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={8}>
        {materials.map((material, index) => (
          <Box
            key={index}
            bg={materialBg}
            p={4}
            borderRadius="md"
            textAlign="center"
          >
            <Text fontSize="3xl" mb={2}>
              {material.icon}
            </Text>
            <Badge
              colorScheme="green"
              fontSize="xs"
              px={2}
              py={1}
              borderRadius="full"
              mb={2}
            >
              {material.tag}
            </Badge>
            <Heading
              as="h4"
              fontSize="sm"
              mb={2}
              color={textColor}
              fontWeight="bold"
            >
              {material.title}
            </Heading>
            <Text fontSize="xs" color={textColor}>
              {material.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <Box
        as="form"
        onSubmit={handleSubmit}
        maxW="lg"
        mx="auto"
        bg={inputBg}
        p={6}
        borderRadius="lg"
        boxShadow="md"
      >
        <VStack spacing={4}>
          <FormControl isInvalid={!!errors.name}>
            <Input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              size="md"
              color={inputTextColor}
              _placeholder={{ color: 'gray.400' }}
            />
            {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <Input
              type="email"
              name="email"
              placeholder="Seu melhor email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              size="md"
              color={inputTextColor}
              _placeholder={{ color: 'gray.400' }}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            )}
          </FormControl>

          <Button
            type="submit"
            w="full"
            bg={useColorModeValue('blue.500', 'blue.500')}
            color="white"
            isLoading={loading}
            loadingText="Enviando..."
            size="lg"
            fontWeight="bold"
            fontSize="md"
            py={7}
            borderRadius="xl"
            boxShadow="0 4px 14px 0 rgba(0, 118, 255, 0.39)"
            _hover={{
              bg: useColorModeValue('blue.600', 'orange.600'),
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0, 118, 255, 0.5)'
            }}
            _active={{
              transform: 'scale(0.98)'
            }}
          >
            📥 Receber Materiais Gratuitos
          </Button>

          <Text
            fontSize="xs"
            textAlign="center"
            color={useColorModeValue('gray.500', 'white.500')}
          >
            🔒 Seus dados estão seguros. Sem spam, apenas conteúdo de valor.
          </Text>
        </VStack>
      </Box>
    </Box>
  )
}
