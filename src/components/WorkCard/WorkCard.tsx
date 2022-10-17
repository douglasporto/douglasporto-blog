import { Box, Heading, VStack } from '@chakra-ui/react'

import * as S from './WorkCard.styles'

export function WorkCard({
  title,
  description,
  image,
  slug
}: {
  title: string
  description: string
  image: string
  slug: string
}) {
  return (
    <Box
      as="a"
      href={`works/${slug}`}
      sx={{
        _hover: {
          color: 'white'
        }
      }}
    >
      <S.Container as="li">
        <img src={image} />
        <S.Title flexDirection="column" alignItems="center">
          <VStack spacing={2}>
            <Heading as="h3" fontSize="lg">
              {title}
            </Heading>
            <Heading as="h6" fontSize="sm">
              {description}
            </Heading>
          </VStack>
        </S.Title>
      </S.Container>
    </Box>
  )
}
