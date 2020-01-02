import React from "react"
import PropTypes from "prop-types"

import * as S from "./styles"

import Avatar from "../Avatar"

export default function Author({ fullText }) {
  return (
    <S.Container>
      <S.Header>What`s up Maaann!!!</S.Header>
      {fullText && (
        <S.Avatar>
          <Avatar large={true} />
        </S.Avatar>
      )}
      <S.Description>
        Meu nome é <span itemProp="name">Douglas Porto</span> e sou apaixonado
        por tecnologia. Trabalho com desenvolvimento Web desde 2010 onde
        trabalhe por 9 anos com sistema para callcenter do{" "}
        <a href="https://financiamentos.bradesco/" target="_blank">
          Banco Bradeco
        </a>
      </S.Description>
      <S.Description>
        Hoje me considero FullStack, podendo trabalhar com BackEnd tanto quanto
        FrontEnd. Atualmente trabalhando na{" "}
        <a href="https://fabapp.com" target="_blank">
          FabApp.
        </a>
      </S.Description>
      {fullText && (
        <>
          <S.Description>
            Fiz meu primeiro "site" no corelDraw. Sim, é possível. rsrsrs Entrei
            na faculdade no ano de 2009 para fazer Análise e Desenvolvimento de
            Sistemas, mesmo sem ter muita idéia do que seria o curso. Tudo que
            sabia era: Vou cursar algo relacionado a computador (rsrs).
          </S.Description>
          <S.Description>
            Como um brasileiro típico, primeiro entra num curso qualquer só para
            ter diploma. Ironicamente acertei, pois umas das primeiras aulas foi
            HTML e aquilo explodiu minha cabeça. Mesmo ainda sem saber
            programar, entrei numa empresa em 2010 de desenvolvimento de sistema
            web para callcenter. E olha a web cruzando mais uma vez minha vida.
            Bom, desde 2010 venho ganhando experiência e aprendendo cada vez
            mais.
          </S.Description>
        </>
      )}
    </S.Container>
  )
}

Author.propTypes = {
  fullText: PropTypes.bool,
}
