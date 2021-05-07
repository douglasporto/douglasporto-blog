import React from "react"

import * as S from "./styles"

export default function Social({ footer = false }) {
  return (
    <S.Container footer={footer}>
      <S.IconLink to="https://github.com/douglasporto">
        <S.IconGithub />
      </S.IconLink>
      <S.IconLink to="https://twitter.com/DgsApenas">
        <S.IconTwitter />
      </S.IconLink>
      <S.IconLink to="https://www.linkedin.com/in/douglas-porto/">
        <S.IconLinkedinIn />
      </S.IconLink>
      <S.IconLink to="https://www.twitch.tv/dgsapenas" borderColor="#9147ff">
        <S.IconTwitch />
      </S.IconLink>
    </S.Container>
  )
}
