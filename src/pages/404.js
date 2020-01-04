import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import ButtonLink from "@components/ButtonLink"
import GridTemplate from "@components/GridTemplate"
import Layout from "@components/Layout"
import * as S from "@components/PageStyles/styles"
import SEO from "@components/seo"

const NotFoundPage = () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "404.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="404: Not found" />
      <GridTemplate>
        <S.Title>
          Puts... deu ruim mano!{"  "}
          <span className="small" role="img" aria-label="Emoji assustado">
            😱
          </span>
        </S.Title>
        <S.ContainerImg>
          <S.Image fluid={image.childImageSharp.fluid} />
          <S.Erro>404</S.Erro>
        </S.ContainerImg>
        <S.Description>
          Não sei o que procurava, mas de uma olhadinha no blog, poderá
          encontrar lá.{"  "}
          <span className="small" role="img" aria-label="Emoji feliz">
            😄
          </span>
        </S.Description>
        <ButtonLink to="/blog/">
          <S.Description>Blog</S.Description>
        </ButtonLink>
      </GridTemplate>
    </Layout>
  )
}

export default NotFoundPage
