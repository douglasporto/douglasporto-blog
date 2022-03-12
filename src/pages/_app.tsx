import { useEffect } from 'react'

import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import LayoutWrapper from '_Layout/Wrapper/Wrapper'
import { ChakraProvider } from '@chakra-ui/react'
import Analytics from 'components/Analytics'
import { SidebarDrawerProvider } from 'context/SidebarDrawerProvider'
import { AnimatePresence } from 'framer-motion'
import * as gtag from 'lib/gtag'

import Fonts from 'styles/font'
import theme from 'styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <LayoutWrapper {...pageProps}>
        <SidebarDrawerProvider>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} />
            <Analytics />
          </AnimatePresence>
        </SidebarDrawerProvider>
      </LayoutWrapper>
    </ChakraProvider>
  )
}
