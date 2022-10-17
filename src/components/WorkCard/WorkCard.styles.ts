import { Flex, GridItem } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Container = styled(GridItem)`
  list-style: none;
  img {
    height: auto;
    border-radius: 0.75rem;
    border: 1px solid rgb(63 63 70 / 1);
    max-width: 100%;
    @media (min-width: 768px) {
      max-width: 352px;
      max-height: 177px;
      object-fit: cover;
    }
  }
`

export const Title = styled(Flex)`
  margin-top: 0.75rem;
`
