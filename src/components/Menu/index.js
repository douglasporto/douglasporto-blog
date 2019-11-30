import React from "react"
import { Link } from "gatsby"

import * as S from "./styles"
import { getActiveTheme } from "../../utils/themes"
import menuLinks from "./content"

export default function Menu() {
  return (
    <S.Menu>
      {menuLinks.map((link, i) => (
        <Link
          partiallyActive={true}
          key={i}
          cover
          bg={getActiveTheme()}
          direction="down"
          duration={1}
          to={link.url}
          activeClassName="active"
        >
          {link.label}
        </Link>
      ))}
    </S.Menu>
  )
}
