import Img from "gatsby-image"

import styled from "styled-components"
import media from "styled-media-query"

export const Title = styled.h1`
  margin: 3rem 0 0 0;
  font-size: 2.6rem;
  padding-bottom: 1.2rem;
  border-bottom: solid 1px var(--secondaryColor);
`

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
`
export const Erro = styled.h1`
  font-size: 15rem;
  display: none;
  ${media.greaterThan("medium")`
    display: block;
  `}
`

export const Image = styled(Img).attrs({
  alt: "Douglas Porto",
  "aria-label": "Douglas Porto",
})`
  display: block;
  width: 300px;
`

export const Description = styled.p`
  font-size: 2.3rem;
`
