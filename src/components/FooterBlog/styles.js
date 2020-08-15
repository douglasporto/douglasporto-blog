import styled from "styled-components"

import * as T from "@styles/typography"
import * as V from "@styles/variables"

export const Container = styled.div`
  margin-bottom: ${V.Space.md};
  margin-top: ${V.Space.md};
  padding-top: ${V.Space.md};
  position: relative;
  &:after {
    border-top: 1px solid var(--borderColor);
    content: "";
    left: 20%;
    position: absolute;
    right: 20%;
    top: 0;
  }
`

export const Title = styled.h2`
  ${T.Subtitle1}
  &:not(:last-child) {
    margin-bottom: ${V.Space.sm};
  }
  span {
    padding-left: 1rem;
  }
`
