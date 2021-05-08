import React from "react"

import PropTypes from "prop-types"

import * as S from "./styles"

export default function Tags({ tags, hasLink }) {
  return (
    <S.TagsContainer>
      {tags.map((tag, i) => (
        <S.TagsItems key={i}>
          {!hasLink ? (
            <span>{tag}</span>
          ) : (
            <S.TagsItemsLink to={`/blog/?query=${tag}`}>
              {tag}
            </S.TagsItemsLink>
          )}
        </S.TagsItems>
      ))}
    </S.TagsContainer>
  )
}

Tags.propTypes = {
  tags: PropTypes.array,
  hasLink: PropTypes.bool,
}
