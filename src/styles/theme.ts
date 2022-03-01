import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const styles = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global: (props: any) => ({
    body: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      bg: mode('#f0e7db', '#0E091B')(props),
      color: mode('gray.800', 'whiteAlpha.900')(props),
      a: {
        _hover: {
          textDecoration: 'none',
          color: mode('purple.500', 'pink.400')(props)
        }
      }
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  }
}

const colors = {
  primary: {
    main: '#ED64A6',
    second: '#805AD5'
  }
}

console.log(styles)

// 3. extend the theme
const theme = extendTheme({ styles, config, components, colors })

export default theme
