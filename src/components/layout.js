import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as Gatsby } from "../images/gatsby.svg"
import { ReactComponent as Netlify } from "../images/netlify.svg"
import Header from "./header"

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
    <div className="container flex flex-col min-h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="flex-grow">{children}</main>
      <footer className="flex items-center text-sm mb-12">
        © {new Date().getFullYear()}, Built with
        <a aria-label="Gatsby" href="https://www.gatsbyjs.org/">
          <Gatsby className="h-4 ml-1" />
        </a>
        , running on
        <a aria-label="Netlify" href="https://www.netlify.com/">
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
