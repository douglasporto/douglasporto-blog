import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as S from "./styles"
import { getActiveTheme } from "../../utils/themes"
import menuLinks from "./content"

export default function Menu() {
  return (
    <S.Menu>
      {menuLinks.map((link, i) => (
        <AniLink
          partiallyActive={true}
          key={i}
          cover
          bg={getActiveTheme()}
          direction="down"
          duration={0.8}
          to={link.url}
          activeClassName="active"
        >
          {link.label}
        </AniLink>
      ))}
    </S.Menu>
  )
}
