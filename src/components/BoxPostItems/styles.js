import AniLink from "gatsby-plugin-transition-link/AniLink"

import styled from "styled-components"
import media from "styled-media-query"


import * as T from "@styles/typography"
import * as V from "@styles/variables"

export const BlogItem = styled(AniLink)`
  color: var(--primaryColor);
  display: block;

  &:not(:last-child) {
    margin-bottom: ${V.Space.default};
  }
`

const TitleSmall = `
  ${T.Heading4}
`

export const Title = styled.h1`
  ${props => (props.isMini ? `${TitleSmall}` : `${T.Heading1}`)}

  &:not(:first-child) {
    margin-top: ${props => (props.isMini ? `${V.Space.xs}` : `${V.Space.sm}`)};
  }

  &:not(:last-child) {
    margin-bottom: ${V.Space.xs};
  }
`

export const Subtitle = styled.h2`
  ${T.Subtitle2}

  &:not(:last-child) {
    margin-bottom: ${V.Space.default};
  }
`

export const BoxHandler = styled.article`
  border: ${V.Border.box};
  border-radius: ${V.BorderRadius.box};
  box-shadow: ${V.BoxShadow.box};
  color: var(--primaryColor);
  display: block;
  height: 100%;
  min-height: 15rem;
  padding: ${V.Space.sm};
  position: relative;
  will-change: border-color;

  ${media.greaterThan("medium")`
    padding: ${V.Space.default};
  `}

  &:after,
  &:before {
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform ${V.Transition.default};
  }

  &:before {
    border-left: 1px solid var(--themeColor);
    border-right: 1px solid var(--themeColor);
    transform: scaleY(0);
  }

  &:after {
    border-bottom: 1px solid var(--highlightColor);
    border-top: 1px solid var(--highlightColor);
    transform: scaleX(0);
  }

  &:hover {
    &:before {
      transform: scaleY(1);
    }

    &:after {
      transform: scaleX(1);
    }
  }
`
