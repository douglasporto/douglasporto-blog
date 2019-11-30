import React from "react"
import PropTypes from "prop-types"

import * as S from "./styles"

import Tags from "../Tags"
import ButtonLink from "../ButtonLink"

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
      <S.Head>
        {date}
        <span> · Leitura de {timeToRead} min</span>
      </S.Head>
      <ButtonLink rel={title} to={slug}>
        <S.Title>{title}</S.Title>
      </ButtonLink>
      <S.Tags>
        <Tags tags={tags} />
      </S.Tags>
      <S.Description>{description}</S.Description>
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
