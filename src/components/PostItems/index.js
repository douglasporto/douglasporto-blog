import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as S from "./styles"
import Tags from "../Tags"

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
      <S.Title>{title}</S.Title>
      <S.Head>
        {date} - {timeToRead} minutos de leitura
      </S.Head>
      <Tags tags={tags} />
      <S.Description>{description}</S.Description>
      <Link to={slug}>
        <S.ItemButtom>Leia mais</S.ItemButtom>
      </Link>
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
