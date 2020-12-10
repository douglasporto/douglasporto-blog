import React from "react"

import { getActiveTheme } from "@utils/themes"

import menuLinks from "./content"
import * as S from "./styles"

export default function Menu() {
  return (
    <S.Menu>
      {menuLinks.map((link, i) => (
        <S.StyleLink
          hideMobile={link.hideMobile}
          partiallyActive={true}
          cover
          bg={getActiveTheme()}
          direction="down"
          duration={0.8}
          to={link.url}
          target={link.target}
          activeClassName="active"
        >
          {link.label}
        </S.StyleLink>
      ))}
    </S.Menu>
  )
}
