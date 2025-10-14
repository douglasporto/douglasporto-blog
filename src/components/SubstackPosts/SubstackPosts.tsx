import React, { useCallback, useEffect, useState } from 'react'

import {
  Box,
  Heading,
  VStack,
  Text,
  Link,
  Spinner,
  useColorModeValue,
  Badge,
  Flex
} from '@chakra-ui/react'

interface SubstackPost {
  title: string
  link: string
  pubDate: string
  description: string
  author?: string
}

const SubstackPosts = () => {
  const [posts, setPosts] = useState<SubstackPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.800', 'white')
  const hoverBg = useColorModeValue('gray.50', 'whiteAlpha.300')
  const primaryColor = useColorModeValue('primary.light', 'primary.main')

  const fetchSubstackPosts = useCallback(async () => {
    try {
      // Using a CORS proxy to fetch RSS feed
      const proxyUrl = 'https://api.allorigins.win/raw?url='
      const feedUrl = 'https://douglasporto.substack.com/feed'

      const response = await fetch(proxyUrl + encodeURIComponent(feedUrl))
      const text = await response.text()

      // Parse XML
      const parser = new DOMParser()
      const xml = parser.parseFromString(text, 'text/xml')

      const items = xml.querySelectorAll('item')
      const parsedPosts: SubstackPost[] = []

      items.forEach((item, index) => {
        if (index < 5) {
          // Limit to 5 most recent posts
          const title = item.querySelector('title')?.textContent || ''
          const link = item.querySelector('link')?.textContent || ''
          const pubDate = item.querySelector('pubDate')?.textContent || ''
          const description =
            item.querySelector('description')?.textContent || ''
          const author =
            item.querySelector('dc\\:creator')?.textContent ||
            item.querySelector('creator')?.textContent ||
            'Douglas Porto'

          parsedPosts.push({
            title,
            link,
            pubDate,
            description: stripHtml(description).substring(0, 150) + '...',
            author
          })
        }
      })

      setPosts(parsedPosts)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching Substack posts:', err)
      setError('Não foi possível carregar os posts')
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSubstackPosts()
  }, [fetchSubstackPosts])

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="lg" color="orange.500" />
      </Box>
    )
  }

  if (error) {
    return (
      <Box textAlign="center" py={10}>
        <Text color="red.500">{error}</Text>
      </Box>
    )
  }

  return (
    <Box borderRadius="lg" my={12}>
      <Heading
        as="h3"
        fontSize="lg"
        color={primaryColor}
        variant="section-title"
        mb={6}
      >
        Newsletter - Últimos textos
      </Heading>

      <VStack spacing={4} align="stretch">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              p={4}
              bg={bgColor}
              borderRadius="lg"
              border="1px solid"
              borderColor={borderColor}
              transition="all 0.3s"
              _hover={{
                bg: hoverBg,
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
              }}
            >
              <Flex justify="space-between" align="flex-start" mb={2}>
                <Heading as="h4" size="md" color={headingColor}>
                  {post.title}
                </Heading>
                <Badge colorScheme="orange" ml={2} flexShrink={0}>
                  {formatDate(post.pubDate)}
                </Badge>
              </Flex>

              <Text color={textColor} fontSize="sm" mb={2}>
                {post.description}
              </Text>

              <Text fontSize="xs" color="orange.500" fontWeight="semibold">
                Ler mais →
              </Text>
            </Box>
          </Link>
        ))}
      </VStack>

      {posts.length > 0 && (
        <Box textAlign="center" mt={6}>
          <Link
            href="https://douglasporto.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            color="orange.500"
            fontWeight="semibold"
            fontSize="sm"
            _hover={{ textDecoration: 'underline' }}
          >
            Ver todos os posts →
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default SubstackPosts
