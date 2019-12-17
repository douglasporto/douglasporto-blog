import React from "react"
import PropTypes from "prop-types"

import * as S from "./styles"

export default function PostImage({ imageSrc }) {
  return <S.PostImage fluid={imageSrc.childImageSharp.fluid} />
}

PostImage.propTypes = {
  imageSrc: PropTypes.node.isRequired,
}
