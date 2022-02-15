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
    <NextLink href={href} passHref>
      <Box
        as="a"
        p={2}
        color={active ? 'pink.700' : inactiveColor}
        fontWeight={active ? '700' : '500'}
        target={_target}
      >
        {children}
      </Box>
    </NextLink>
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
      bg={useColorModeValue('#ffffff40', '#0E091B80')}
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
            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>
            <LinkItem href="/posts" path={path}>
              Posts
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
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
