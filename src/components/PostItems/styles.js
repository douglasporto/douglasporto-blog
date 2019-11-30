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
  padding: 2rem 3rem;
  width: 100%;
`
export const Head = styled.div`
  ${T.Small}
`
export const Title = styled.h1`
  ${props => (props.isMini ? `${T.Heading4}` : `${T.Heading1}`)}
  &:not(:first-child) {
    margin-top: ${props => (props.isMini ? `${V.Space.xs}` : `${V.Space.sm}`)};
  }
  &:not(:last-child) {
    margin-bottom: ${V.Space.xs};
  }
`
export const Description = styled.h2`
  ${T.Subtitle1}
  margin-top: ${V.Space.default};
  &:not(:last-child) {
    margin-bottom: ${V.Space.default};
  }
`
export const ItemButtom = styled.button`
  ${T.Heading4}
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 5px 15px;
  border-radius: 3px;
  border: ${V.Border.box};
  border-radius: ${V.BorderRadius.box};
  box-shadow: ${V.BoxShadow.box};
  color: var(--primaryColor);
  position: relative;
  will-change: border-color;
  cursor: pointer;
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
    border-bottom: 1px solid var(--themeColor);
    border-top: 1px solid var(--themeColor);
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
