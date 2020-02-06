import React from "react"
import { ReactComponent as ExternalLink } from "../images/external-link.svg"

export default ({ to, children }) => (
  <a className="inline-flex items-center underline" href={to}>
    {children} <ExternalLink className="ml-1 h-3 text-cool-grey-400" />
  </a>
)
