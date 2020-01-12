import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import PropTypes from "prop-types"

import Container from "@components/Container"
import Footer from "@components/Footer"
import Header from "@components/Header"

import GlobalStyles from "@styles/global"

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
      <TransitionPortal level="top">
        <Header site={site.siteMetadata} />
      </TransitionPortal>
      <S.Main>
        <Container>{children}</Container>
      </S.Main>
      <TransitionPortal level="bottom">
        <Footer />
      </TransitionPortal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
