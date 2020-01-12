import React from "react"

import * as S from "./styles"

export default function ExternalLink({ children, to, title }) {
  return (
    <S.ExternalLink to={to} title={title}>
      {children}
    </S.ExternalLink>
  )
}
