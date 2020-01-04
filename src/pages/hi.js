import React from "react"

import Author from "@components/Author"
import GridTemplate from "@components/GridTemplate"
import Layout from "@components/Layout"
import SEO from "@components/seo"

const HiPage = () => (
  <Layout>
    <SEO title="Sobre mim" />
    <GridTemplate>
      <Author fullText={true} />
    </GridTemplate>
  </Layout>
)

export default HiPage
