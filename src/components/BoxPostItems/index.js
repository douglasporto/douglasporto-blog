import React from "react"
import PropTypes from "prop-types"

import { getActiveTheme } from "../../utils/themes"

import * as S from "./styles"
import * as D from "../DateTime/styles"

export default function BoxPostItems({ slug, title, isMini, date }) {
  return (
    <S.BlogItem
      to={`/${slug}`}
      cover
      direction="down"
      duration={0.8}
      title={title}
      bg={getActiveTheme()}
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
