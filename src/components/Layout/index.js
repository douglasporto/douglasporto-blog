import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import GlobalStyles from "../../styles/global"
import Header from "../Header"
import Container from "../Container"
import * as S from "./styles"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            position
            description
          }
        }
      }
    `
  )
  return (
    <>
      <GlobalStyles />
      <Header site={site.siteMetadata} />
      <S.Main>
        <Container>{children}</Container>
      </S.Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
