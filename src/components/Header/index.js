import React from "react"

import PropTypes from "prop-types"
import { Link } from "gatsby"

import Avatar from "../Avatar"
import Menu from "../Menu"
import LightButton from "../LightButton"

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
