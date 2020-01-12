import React from "react"

import Social from "@components/Social"

import * as S from "./styles"

export default function Footer() {
  return (
    <S.Footer>
      <S.FooterSocial>
        <Social footer={true} />
      </S.FooterSocial>
      <S.FooterText>© copywrite - Douglas Porto</S.FooterText>
    </S.Footer>
  )
}
