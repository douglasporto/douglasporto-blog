import { ReactNode } from 'react'
import { RiMenuLine } from 'react-icons/ri'

import NextLink from 'next/link'

import ThemeToggleButton from '_Layout/ThemeToggleButton/ThemeToggleButton'
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import Logo from '@/components/Logo/Logo'

type LinkItemProps = {
  href: string
  path: string
  _target?: string
  children: ReactNode
}

const LinkItem = ({
  href,
  path,
  _target = '_self',
  children
}: LinkItemProps) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <Box
      as="a"
      p={2}
      color={active ? 'orange.500' : inactiveColor}
      fontWeight={active ? '700' : '500'}
      target={_target}
      href={href}
    >
      {children}
    </Box>
  )
}

const Header = ({ path }: { path: string }) => {
  return (
    <Box
      position="fixed"
      display="flex"
      as="header"
      width="100%"
      w="100%"
      alignContent="center"
      justifyContent="center"
      bg={useColorModeValue('#E5E7EB95', '#1F293795')}
      sx={{
        backdropFilter: 'blur(10px)',
        boxShadow: '2px 2px 4px rgb(0 0 0 / 70%)'
      }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={4}
        maxW="container.md"
        width="100%"
        alignContent="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>

        <Flex alignContent="right">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            alignContent="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem
              href="https://onetwo-tech.baseportal.io/forms/2a45e044-ea9f-4ac3-aa12-b46af5066081"
              path={path}
              _target="_blank"
            >
              Mentoria
            </LinkItem>
            <LinkItem
              href="https://douglasporto.substack.com"
              path={path}
              _target="_blank"
            >
              Newsletter
            </LinkItem>
            <LinkItem href="/its-me" path={path}>
              It&apos;s me
            </LinkItem>
            <LinkItem href="/posts" path={path}>
              Artigos
            </LinkItem>
          </Stack>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<RiMenuLine />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem
                  as={Link}
                  href="https://onetwo-tech.baseportal.io/forms/2a45e044-ea9f-4ac3-aa12-b46af5066081"
                  target="_blank"
                >
                  Mentoria
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://douglasporto.substack.com"
                  target="_blank"
                >
                  Newsletter
                </MenuItem>
                <NextLink href="/its-me" passHref>
                  <MenuItem as={Link}>It&apos;s me</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Artigos</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
