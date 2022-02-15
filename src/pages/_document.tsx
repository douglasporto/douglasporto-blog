import Document, { Html, Head, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'

import theme from '../styles/theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* <link rel="stylesheet" href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"></link> */}
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
