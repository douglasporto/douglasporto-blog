import React from "react"

import { Link } from "gatsby"

import PropTypes from "prop-types"

import Avatar from "@components/Avatar"
import Menu from "@components/Menu"
import Social from "@components/Social"

import * as S from "./styles"

const Header = ({ site: { author } }) => {
  return (
    <S.Header>
      <S.Content>
        <S.Nav>
          <Link to="/">
            <Avatar />
          </Link>
          <Link to="/">
            <S.Title></S.Title>
          </Link>
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
