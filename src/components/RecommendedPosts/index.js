import React from "react"

import propTypes from "prop-types"

import BoxPostItems from "@components/BoxPostItems"

import * as S from "./styles"

const RecommendedPosts = ({ next, previous }) => (
  <S.PostNav>
    {previous && (
      <S.NavItem>
        <S.Title>Anterior</S.Title>
        <BoxPostItems
          slug={previous.fields.slug}
          date={previous.frontmatter.date}
          title={previous.frontmatter.title}
          isMini={true}
        />
      </S.NavItem>
    )}
    {next && (
      <S.NavItem>
        <S.Title>Próximo</S.Title>
        <BoxPostItems
          slug={next.fields.slug}
          date={next.frontmatter.date}
          title={next.frontmatter.title}
          isMini={true}
        />
      </S.NavItem>
    )}
  </S.PostNav>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
