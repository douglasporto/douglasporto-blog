import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styles"

export default function Avatar({ large }) {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <S.Avatar large={large} fluid={image.childImageSharp.fluid} />
}
