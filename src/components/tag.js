import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import _ from "lodash"

const Tag = ({ children }) => (
  <Link
    to={`/tags/${_.kebabCase(children)}`}
    className="inline-block bg-light-blue-vivid-100 text-light-blue-vivid-800 text-xs px-1 mx-1 rounded text-white font-bold"
  >
    {children}
  </Link>
)

Tag.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Tag
