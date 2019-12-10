import styled from "styled-components"
import media from "styled-media-query"
import * as V from "../../styles/variables"

export const Header = styled.header.attrs({
  role: "banner",
})`
  background-color: var(--headerColor);
  color: ${V.Color.white};
  display: block;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: background-color 0.3s;
  width: 100%;
  will-change: background-color;
  z-index: ${V.ZIndex.header};
`
export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: ${V.MaxSize.lg};
  padding-left: ${V.Space.sm};
  padding-right: ${V.Space.sm};
  ${media.greaterThan("medium")`
    padding-left: ${V.Space.default};
    padding-right: ${V.Space.default};
  `}
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  & > a {
    color: ${V.Color.white};
    transition: color ${V.Transition.default};
    font-weight: bold;
    padding-right: 15px;
    &.active {
      color: var(--headerFontColor);
    }
    &:focus,
    &:hover {
      color: var(--headerFontColor);
      transform: translateY(-2px);
    }
  }
`
export const Title = styled.h1`
  display: inline-block;
  font-size: 1.7rem;
  letter-spacing: 0.025rem;
  ${media.lessThan("350px")`
    display: none;
  `}
  ${media.greaterThan("small")`
    font-size: 2.1rem;
  `}
  &:after {
    content: "/DouglasPorto.(js|css|html)/gi";
    ${media.lessThan("small")`
    content: "DouglasPorto";
    `}
  }
`
export const Menu = styled.div`
  align-items: center;
  display: flex;
  ${media.lessThan("small")`
    margin-right: -${V.Space.xs};
  `}
  > *:not(:last-child) {
    margin-right: ${V.Space.xs};
  }
`
