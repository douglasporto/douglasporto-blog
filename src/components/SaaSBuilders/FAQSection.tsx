import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  VStack
} from '@chakra-ui/react'

const faqs = [
  {
    question: '🤔 Preciso saber programar?',
    answer:
      'Sim, conhecimento básico de JavaScript/React é necessário. Não é para completos iniciantes.'
  },
  {
    question: '⏰ Quanto tempo preciso dedicar?',
    answer:
      'Mínimo recomendado de 10h/semana. Com 20h/semana os resultados são exponenciais.'
  },
  {
    question: '📅 Quando acontecem as mentorias?',
    answer:
      'Terças 20h: Build Session (4h de código ao vivo)\nQuintas 20h: Office Hours (2h tirando dúvidas)\nSábados 10h: Guest Founders (quando tiver)'
  },
  {
    question: '🌎 Posso vender para o exterior?',
    answer:
      'Sim! Ensino Stripe Atlas, Wise Business e vendas globais. Inclusive recomendo - lá fora pagam em dólar.'
  },
  {
    question: '❌ E se eu não conseguir criar meu SaaS?',
    answer:
      'Você pode cancelar quando quiser. Mas se seguir o método e participar ativamente, é quase impossível não conseguir.'
  },
  {
    question: '💳 Quais formas de pagamento?',
    answer: 'Cartão de crédito, PIX, ou boleto. Cobrança recorrente mensal.'
  },
  {
    question: '📱 Preciso aparecer nas mentorias?',
    answer:
      'Não é obrigatório ligar câmera. Mas participação ativa é importante.'
  },
  {
    question: '🎯 Vou ter suporte direto seu?',
    answer: 'Sim! Respondo no Discord diariamente e nas Office Hours semanais.'
  }
]

export function FAQSection() {
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
              Perguntas Frequentes
            </Heading>
          </Box>

          {/* FAQ Accordion */}
          <Box maxW="900px" mx="auto" w="100%" px={{ base: 0, md: 4 }}>
            <Accordion allowToggle>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  border="none"
                  mb={4}
                  bg="gray.50"
                  _dark={{ bg: 'gray.700' }}
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <h3>
                    <AccordionButton
                      p={6}
                      _hover={{
                        bg: 'purple.50',
                        _dark: { bg: 'purple.900' }
                      }}
                      transition="all 0.3s ease"
                    >
                      <Box
                        flex="1"
                        textAlign="left"
                        fontSize={{ base: 'md', md: 'lg' }}
                        fontWeight="bold"
                        color="gray.800"
                        _dark={{ color: 'white' }}
                      >
                        {faq.question}
                      </Box>
                      <AccordionIcon
                        fontSize="2xl"
                        color="purple.600"
                        _dark={{ color: 'purple.400' }}
                      />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel
                    pb={6}
                    px={6}
                    pt={0}
                    fontSize={{ base: 'sm', md: 'md' }}
                    color="gray.700"
                    _dark={{ color: 'gray.300' }}
                    lineHeight="tall"
                    whiteSpace="pre-line"
                  >
                    {faq.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
