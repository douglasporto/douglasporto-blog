import React from "react"

import Layout from "../components/Layout"
import GridTemplate from "../components/GridTemplate"
import SEO from "../components/seo"
import Author from "../components/Author"

const HiPage = () => (
  <Layout>
    <SEO title="Sobre mim" />
    <GridTemplate>
      <Author fullText={true} />
    </GridTemplate>
  </Layout>
)

export default HiPage
