import { useEffect } from 'react'

import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import LayoutWrapper from '_Layout/Wrapper/Wrapper'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Analytics from 'components/Analytics'
import { SidebarDrawerProvider } from 'context/SidebarDrawerProvider'
import { AnimatePresence } from 'framer-motion'
import * as gtag from 'lib/gtag'

import Fonts from 'styles/font'
import theme from 'styles/theme'

const queryClient = new QueryClient()

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
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>
            <Analytics />
          </AnimatePresence>
        </SidebarDrawerProvider>
      </LayoutWrapper>
    </ChakraProvider>
  )
}
