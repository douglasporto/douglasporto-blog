import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styles"

export default function Avatar() {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 48, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <S.Avatar fluid={image.childImageSharp.fluid} />
}
