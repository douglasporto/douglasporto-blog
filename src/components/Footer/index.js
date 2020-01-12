import React, { useState } from "react"

import Social from "@components/Social"

import * as S from "./styles"

export default function Footer() {
  const [year] = useState(new Date().getFullYear())
  return (
    <S.Footer>
      <S.FooterSocial>
        <Social footer={true} />
      </S.FooterSocial>
      <S.FooterText>
        © copywrite {year} - Douglas Porto{" "}
        <a
          className="link"
          href="https://github.com/douglasporto/douglasporto-blog/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Termos de Uso
        </a>
      </S.FooterText>
    </S.Footer>
  )
}
