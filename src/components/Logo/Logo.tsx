import { GoRocket } from 'react-icons/go'

import Link from 'next/link'

import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  svg {
    transition: 300ms ease;
  }

  &:hover svg {
    transform: rotate(-40deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <GoRocket />
          <Text fontWeight="bold" ml={3}>
            {`Douglas Porto`}
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
