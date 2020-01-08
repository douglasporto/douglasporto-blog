import React from "react"

import LightButton from "@components/LightButton"

import * as S from "./styles"

export default function Social() {
  return (
    <S.Container>
      <S.IconLink to="https://github.com/douglasporto">
        <S.IconGithub />
      </S.IconLink>
      <S.IconLink to="https://twitter.com/DgsApenas">
        <S.IconTwitter />
      </S.IconLink>
      <S.IconLink to="https://www.linkedin.com/in/douglas-porto/">
        <S.IconLinkedinIn />
      </S.IconLink>
      <LightButton />
    </S.Container>
  )
}
