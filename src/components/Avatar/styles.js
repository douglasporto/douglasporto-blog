import Img from "gatsby-image"

import styled from "styled-components"
import media from "styled-media-query"

import PropTypes from "prop-types"

import * as V from "@styles/variables"

export const Avatar = styled(Img).attrs({
  alt: "Douglas Porto",
  "aria-label": "Douglas Porto",
})`
  border-radius: 50%;
  display: block;
  height: ${V.Space.md};
  width: ${V.Space.md};
  ${media.greaterThan("medium")`
  ${props =>
    props.large
      ? `height: 15rem;
    width: 15rem;`
      : `height: ${V.Space.md};
  width: ${V.Space.md};`}
  `}
`

Avatar.propTypes = {
  large: PropTypes.bool,
}
