import React from 'react'
import PropTypes from 'prop-types'

export async function getEdgeProps () {
  return {
    props: {
      message: 'Hello'
    }
  }
}

function Bio (props) {
  return <div>This is my bio!</div>
}

Bio.propTypes = {}

export default Bio
