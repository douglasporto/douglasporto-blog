import React from "react"

import PropTypes from "prop-types"

import ButtonLink from "@components/ButtonLink"
import * as D from "@components/DateTime/styles"
import Tags from "@components/Tags"

import * as S from "./styles"

export default function PostItems({
  slug,
  date,
  timeToRead,
  title,
  tags,
  description,
}) {
  return (
    <S.PostItemWrapper>
      {date && (
        <D.DateTime>
          {date}
          <span> · Leitura de {timeToRead} min</span>
        </D.DateTime>
      )}
      <ButtonLink rel={title} to={slug}>
        <S.Title>{title}</S.Title>
      </ButtonLink>
      {tags && (
        <S.Tags>
          <Tags tags={tags} />
        </S.Tags>
      )}
      <S.Description tags={tags}>{description}</S.Description>
    </S.PostItemWrapper>
  )
}

PostItems.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  timeToRead: PropTypes.number,
  tags: PropTypes.array,
  description: PropTypes.string,
  isMini: PropTypes.bool,
}
