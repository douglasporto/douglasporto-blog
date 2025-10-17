import Document, { Html, Head, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'

import theme from '../styles/theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ overflowX: 'hidden' }}>
        <Head />
        <body style={{ overflowX: 'hidden', width: '100%' }}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
