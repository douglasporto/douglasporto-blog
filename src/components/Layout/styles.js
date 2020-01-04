import styled from "styled-components"
import media from "styled-media-query"

import * as V from "@styles/variables"

export const Wrapper = styled.div`
  min-height: 100%;
  padding: 0 0 5px;
`

export const Main = styled.main.attrs({
  role: "main",
})`
  margin-bottom: ${V.Height.footer};
  margin-top: ${V.Height.headerSm};
  min-height: 100vh;
  padding-bottom: ${V.Space.xxlg};
  padding-top: ${V.Height.mainTop};
  width: 100%;
  ${media.greaterThan("medium")`
    margin-top: ${V.Height.headerLg};
  `}
`
