import AniLink from "gatsby-plugin-transition-link/AniLink"

import styled from "styled-components"
import media from "styled-media-query"

import * as T from "@styles/typography"
import * as V from "@styles/variables"

export const Menu = styled.nav`
  display: flex;
  > a {
    align-items: center;
    color: ${V.Color.white};
    cursor: pointer;
    display: inline-flex;
    font-size: 1.7rem;
    height: ${V.Height.headerSm};
    letter-spacing: 0.05rem;
    padding-left: ${V.Space.xs};
    padding-right: ${V.Space.xs};
    text-decoration: none;
    transition: color ${V.Transition.default};
    will-change: color;
    ${media.greaterThan("medium")`
      ${T.LinkTransition}
      &:after {
        background-color: var(--headerFontColor);
        margin-top: 0;
        top: calc(100% - 2px);
      }
    `}
    &:not(:last-child) {
      margin-right: ${V.Space.xs};
    }
    &.active {
      color: var(--headerFontColor);
    }
    &:focus,
    &:hover {
      color: var(--headerFontColor);
    }
  }
`

export const StyleLink = styled(AniLink)`
  ${props => props.hideMobile &&
    media.lessThan("medium")`
      display: none !important;
    `
  }
`;
