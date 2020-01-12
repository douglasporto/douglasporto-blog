import styled from "styled-components"
import { GithubAlt, Twitter, LinkedinIn } from "styled-icons/fa-brands"
import media from "styled-media-query"

import * as T from "@styles/typography"
import * as V from "@styles/variables"

export const Container = styled.nav`
  padding: 0 0.6rem;
  display: inline-block;
  ${props =>
    !props.footer &&
    media.lessThan("medium")`
        display: none;
    `}
`

export const IconLink = styled.a.attrs(props => ({
  target: "_blank",
  href: props.to,
  rel: "noopener noreferrer",
}))`
  ${T.Link}
  font-size: 1.6rem;
  padding: 0 0.6rem;
`

const styleIcon = `
  color: ${V.Color.white};
  height: ${V.Space.default};
  width: ${V.Space.default};
  &:hover {
    color: var(--headerFontColor);
  }`
export const IconGithub = styled(GithubAlt)`
  ${styleIcon}
`

export const IconTwitter = styled(Twitter)`
  ${styleIcon}
`

export const IconLinkedinIn = styled(LinkedinIn)`
  ${styleIcon}
`
