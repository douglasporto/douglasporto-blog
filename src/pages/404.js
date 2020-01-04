import React from "react"
import { Animated } from "react-animated-css"

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
        <Animated
          animationIn="rubberBand"
          animationOut="zoomOutDown"
          animationInDuration={2000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <S.Title>
            Puts... deu ruim mano!{"  "}
            <span className="small" role="img" aria-label="Emoji assustado">
              😱
            </span>
          </S.Title>
        </Animated>
        <S.ContainerImg>
          <Animated
            animationIn="fadeInLeftBig"
            animationOut="zoomOutDown"
            animationInDuration={2000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <S.Image fluid={image.childImageSharp.fluid} />
          </Animated>
          <Animated
            animationIn="fadeInRightBig"
            animationOut="zoomOutDown"
            animationInDuration={2000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <S.Erro>404</S.Erro>
          </Animated>
        </S.ContainerImg>
        <Animated
          animationIn="slideInUp"
          animationOut="zoomOutDown"
          animationInDuration={2000}
          animationOutDuration={1000}
          isVisible={true}
        >
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
        </Animated>
      </GridTemplate>
    </Layout>
  )
}

export default NotFoundPage
