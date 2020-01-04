import React from "react"

import PropTypes from "prop-types"

import PostItems from "../PostItems"

const Hit = props => {
  const { hit } = props

  return (
    <PostItems
      slug={hit.fields.slug}
      date={hit.date}
      timeToRead={hit.timeToRead}
      title={hit.title}
      tags={hit.tags}
      description={hit.description}
    />
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
}

export default Hit
