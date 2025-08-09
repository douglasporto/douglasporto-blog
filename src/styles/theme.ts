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
      bg: mode('#E5E7EB', '#1F2937')(props),
      color: mode('#1F2937', '#E5E7EB')(props),
      a: {
        _hover: {
          textDecoration: 'none',
          color: mode('#2563EB', '#F97316')(props)
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
    main: '#F97316', // For dark mode
    light: '#2563EB', // For light mode (blue)
    second: '#1F2937'
  },
  gray: {
    dark: '#1F2937',
    light: '#E5E7EB'
  },
  orange: '#F97316'
}

// 3. extend the theme
const theme = extendTheme({ styles, config, components, colors })

export default theme
