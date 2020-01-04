import { Link } from "gatsby"

import styled from "styled-components"


import * as T from "@styles/typography"
import * as V from "@styles/variables"

export const TagsContainer = styled.div`
  display: flex;
`
export const TagsItems = styled(Link)`
  ${T.Small}
  text-decoration: none;
  &:hover {
    color: var(--themeColor);
  }
  &:not(:last-child) {
    margin-right: ${V.Space.xxs};
    &:after {
      content: ", ";
      height: 3rem;
    }
  }
`
