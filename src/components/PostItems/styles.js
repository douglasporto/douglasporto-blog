import styled from "styled-components"
import { Link } from "gatsby"
import * as V from "../../styles/variables"
import * as T from "../../styles/typography"

export const PostItemLink = styled(Link)`
  color: red;
  text-decoration: none;
  margin: 30px 0;
`

export const PostItemWrapper = styled.article`
  align-items: center;
  border-bottom: 1px solid var(--borderColor);
  padding: 4rem 3rem;
  width: 100%;
`
export const Head = styled.time`
  color: var(--secondaryColor);
  display: block;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  margin-bottom: 15px;
`
export const Title = styled.h1`
  ${props => (props.isMini ? `${T.Heading4}` : `${T.Heading1}`)}
  &:hover {
    color: var(--highLightColor);
  }
`

export const Tags = styled.div`
  margin: 15px 0;
`
export const Description = styled.h2`
  ${T.Subtitle2}

  &:not(:last-child) {
    margin-bottom: ${V.Space.default};
  }
`
