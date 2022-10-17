import { Flex, Text } from '@chakra-ui/react'

export function Footer() {
  const d = new Date()
  const year = d.getFullYear()
  return (
    <Flex w="100%" align="center" justify="center" p={4}>
      <Text color="gray.500" fontSize="sm">
        © {year} Douglas Porto. All Rights Reserved.
      </Text>
    </Flex>
  )
}
