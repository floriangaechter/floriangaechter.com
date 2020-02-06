import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Header from "./header"
import { ReactComponent as Gatsby } from "../images/gatsby.svg"
import { ReactComponent as Netlify } from "../images/netlify.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="flex items-center text-sm">
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org/">
          <Gatsby className="h-4 ml-1" />
        </a>
        , running on
        <a href="https://www.netlify.com/">
          <Netlify className="h-4 ml-1" />
        </a>
        .
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
