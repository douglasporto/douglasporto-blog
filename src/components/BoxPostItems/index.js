import React from "react"
import PropTypes from "prop-types"

import * as S from "./styles"
import * as D from "../DateTime/styles"

export default function BoxPostItems({ slug, title, isMini, date }) {
  return (
    <S.BlogItem
      to={`/${slug}`}
      cover
      direction="down"
      duration={1}
      title={title}
    >
      <S.BoxHandler>
        <D.DateTime>{date}</D.DateTime>
        <S.Title isMini={isMini}>{title}</S.Title>
      </S.BoxHandler>
    </S.BlogItem>
  )
}

BoxPostItems.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  isMini: PropTypes.bool,
}
