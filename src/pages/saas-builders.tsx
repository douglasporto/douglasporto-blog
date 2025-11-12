import Head from 'next/head'

import { Box } from '@chakra-ui/react'

import { AboutSection } from '@/components/SaaSBuilders/AboutSection'
import { CTASection } from '@/components/SaaSBuilders/CTASection'
import { FAQSection } from '@/components/SaaSBuilders/FAQSection'
import { FloatingCTA } from '@/components/SaaSBuilders/FloatingCTA'
import { GuaranteeSection } from '@/components/SaaSBuilders/GuaranteeSection'
import { HeroSection } from '@/components/SaaSBuilders/HeroSection'
import { PlatformPreviewSection } from '@/components/SaaSBuilders/PlatformPreviewSection'
import { PricingSection } from '@/components/SaaSBuilders/PricingSection'
import { ProblemSection } from '@/components/SaaSBuilders/ProblemSection'
import { SocialProofSection } from '@/components/SaaSBuilders/SocialProofSection'
import { SolutionSection } from '@/components/SaaSBuilders/SolutionSection'
import { TargetAudienceSection } from '@/components/SaaSBuilders/TargetAudienceSection'

// Set full layout without container restrictions
export async function getStaticProps() {
  return {
    props: {
      layout: 'full'
    }
  }
}

export default function SaaSBuilders() {
  return (
    <>
      <Head>
        <title>
          SaaS Builders Brasil - Comunidade de Devs que Faturam com SaaS
        </title>
        <meta
          name="description"
          content="Entre grátis na comunidade onde devs constroem SaaS de R$10k/mês. Apenas 10 vagas gratuitas. Depois R$39,90/mês."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="SaaS Builders Brasil - 7 Vagas Grátis Restantes"
        />
        <meta
          property="og:description"
          content="Comunidade onde devs aprendem a criar SaaS rentáveis. Primeiros 10 membros não pagam nada. Para sempre."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://douglasporto.com.br/saas-builders"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SaaS Builders Brasil" />
        <meta
          name="twitter:description"
          content="7 vagas grátis restantes. Depois R$39,90/mês."
        />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <Box
        as="main"
        w="100%"
        minH="100vh"
        bg="gray.50"
        _dark={{ bg: 'gray.900' }}
        fontFamily="'Inter', sans-serif"
        overflowX="hidden"
      >
        <HeroSection />
        <AboutSection />
        <PlatformPreviewSection />
        <TargetAudienceSection />
        <ProblemSection />
        <SolutionSection />
        <SocialProofSection />
        <PricingSection />
        <GuaranteeSection />
        <FAQSection />
        <CTASection />
        <FloatingCTA />
      </Box>
    </>
  )
}
