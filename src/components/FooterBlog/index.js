import React from "react"

import ExternalLink from "@components/ExternalLink"

import * as S from "./styles"

export default function FooterBlog() {
  return (
    <>
      <S.Container>
        <S.Title>
          Encontrou algum erro? Pow... me ajuda ae!
          <span className="small" role="img" aria-label="Emoji sorrindo">
            😁
          </span>
        </S.Title>
        <p>
          Esse projeto é open source, então é só alterar o arquivo de texto,{" "}
          <ExternalLink
            to="https://github.com/douglasporto/douglasporto-blog/tree/master/content/posts"
            title="Ver Twitter"
          >
            diretamente no Github
          </ExternalLink>{" "}
          e abrir um pull-request. Simples não?
        </p>
      </S.Container>
      <S.Container>
        <S.Title>
          Quer conhecer mais meu trabalho? Sigam-me os bons!!!
          <span
            className="small"
            role="img"
            aria-label="Emoji mostrando a lingua"
          >
            😜
          </span>
        </S.Title>
        <p>
          - Twitter:{" "}
          <ExternalLink to="https://twitter.com/dgsapenas" title="Ver Twitter">
            @dgsapenas
          </ExternalLink>{" "}
          <br />- Github:{" "}
          <ExternalLink
            href="https://github.com/douglasporto"
            title="Ver Github"
          >
            @douglasporto
          </ExternalLink>{" "}
          <br />- Linkedin:{" "}
          <ExternalLink
            href="https://www.linkedin.com/in/douglas-porto/"
            title="Ver Linkedin"
          >
            @douglas-porto
          </ExternalLink>
        </p>
      </S.Container>
    </>
  )
}
