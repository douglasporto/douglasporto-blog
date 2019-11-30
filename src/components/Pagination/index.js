import React from "react"
import propTypes from "prop-types"

import ButtonLink from "../ButtonLink"
import * as S from "./styles"

export default function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) {
  return (
    <S.Pagination>
      {!isFirst && (
        <ButtonLink rel="prev" to={prevPage}>
          ← Anterior
        </ButtonLink>
      )}
      <span>
        {currentPage} de {numPages}
      </span>
      {!isLast && (
        <ButtonLink rel="next" to={nextPage}>
          Próxima →
        </ButtonLink>
      )}
    </S.Pagination>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}
