import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import PropTypes from "prop-types"

import { getActiveTheme } from "@utils/themes"


import Avatar from "@components/Avatar"
import Menu from "@components/Menu"
import Social from "@components/Social"

import * as S from "./styles"

const Header = ({ site: { author } }) => {
  return (
    <S.Header>
      <S.Content>
        <S.Nav>
          <AniLink 
            to="/"
            partiallyActive={true}
            cover
            bg={getActiveTheme()}
            direction="down"
            duration={0.8}
          >
            <Avatar />
          </AniLink>
          <AniLink 
            to="/"
            partiallyActive={true}
            cover
            bg={getActiveTheme()}
            direction="down"
            duration={0.8}
          >
            <S.Title></S.Title>
          </AniLink>
        </S.Nav>
        <S.Menu>
          <Menu />
        </S.Menu>
        <Social />
      </S.Content>
    </S.Header>
  )
}

Header.propTypes = {
  site: PropTypes.shape({
    author: PropTypes.string.isRequired,
  }),
}

export default Header
