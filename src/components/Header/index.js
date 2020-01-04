import React from "react"

import { Link } from "gatsby"

import PropTypes from "prop-types"

import Avatar from "@components/Avatar"
import LightButton from "@components/LightButton"
import Menu from "@components/Menu"

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
        <LightButton />
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
