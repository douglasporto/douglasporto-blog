import styled from "styled-components"

import * as T from "@styles/typography"

export const ExternalLink = styled.a.attrs(props => ({
  target: "_blank",
  href: props.to,
  title: props.title,
  rel: "noopener noreferrer",
}))`
  ${T.Link}
  cursor: pointer;
`
