import { AppProps } from 'next/app'

import LayoutWrapper from '_Layout/Wrapper/Wrapper'
import { ChakraProvider } from '@chakra-ui/react'
import { SidebarDrawerProvider } from 'context/SidebarDrawerProvider'
import { AnimatePresence } from 'framer-motion'

import Fonts from 'styles/font'
import theme from 'styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <LayoutWrapper {...pageProps}>
        <SidebarDrawerProvider>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} />
          </AnimatePresence>
        </SidebarDrawerProvider>
      </LayoutWrapper>
    </ChakraProvider>
  )
}
