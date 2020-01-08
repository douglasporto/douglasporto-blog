import styled from "styled-components"
import { Sun, Moon } from "styled-icons/boxicons-solid"

import * as V from "@styles/variables"

export const LightButton = styled.button.attrs(props => ({
  title: props.active ? `Apagar a luz` : `Acender a luz`,
  role: "button",
}))`
  align-items: center;
  color: ${props => (props.active ? `${V.Color.yellow}` : `${V.Color.blue}`)};
  cursor: pointer;
  display: inline-flex;
  height: ${V.Height.headerSm};
  padding-left: ${V.Space.xs};
  padding-right: ${V.Space.xs};
  &:focus {
    outline: transparent;
  }
`

export const LightButtonIconSun = styled(Sun)`
  display: block;
  height: ${V.Space.default};
  width: ${V.Space.default};
`
export const LightButtonIconMoon = styled(Moon)`
  display: block;
  height: ${V.Space.default};
  width: ${V.Space.default};
`
