import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'

import DateFormatter from './date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  timeToRead: number
}

const PostHeader = ({ title, coverImage, date, timeToRead }: Props) => {
  return (
    <>
      <Flex justifyContent="center">
        <Text
          color={useColorModeValue('purple.500', 'pink.400')}
          fontSize="3xl"
        >
          {title}
        </Text>
      </Flex>
      <Flex justifyContent="center">
        <Text fontSize="sm" as="i">
          <DateFormatter dateString={date} /> · Leitura de {timeToRead} min
        </Text>
      </Flex>
      <Box py={4}>
        <Image src={coverImage} alt={title} />
      </Box>
    </>
  )
}

export default PostHeader
