import React from "react"

import PropTypes from "prop-types"

import * as S from "./styles"

export default function Tags({ tags }) {
  return (
    <S.TagsContainer>
      {tags.map((tag, i) => (
        <S.TagsItems key={i} to={`blog?query=${tag}`}>
          {tag}
        </S.TagsItems>
      ))}
    </S.TagsContainer>
  )
}

Tags.propTypes = {
  tags: PropTypes.array,
}
