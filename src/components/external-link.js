import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as ExternalLinkIcon } from "../images/external-link.svg"

const ExternalLink = ({ to, children }) => (
  <a className="inline-flex items-center underline" href={to}>
    {children} <ExternalLinkIcon className="ml-1 h-3 text-cool-grey-400" />
  </a>
)

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ExternalLink
