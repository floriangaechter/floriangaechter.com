import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as Gatsby } from "../images/gatsby.svg"
import { ReactComponent as Netlify } from "../images/netlify.svg"
import { ReactComponent as Email } from "../images/email.svg"
import { ReactComponent as RSS } from "../images/rss.svg"
import { ReactComponent as Github } from "../images/github.svg"
import { ReactComponent as Twitter } from "../images/twitter.svg"
import { ReactComponent as Flo } from "../images/floriangaechter.svg"

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
      <footer className="sm:flex items-center justify-between text-sm my-12">
        <div className="sm:flex items-center mb-4 sm:mb-0">
          © {new Date().getFullYear()}, Built with
          <a
            aria-label="Gatsby"
            title="Gatsby"
            href="https://www.gatsbyjs.org/"
            rel="noreferrer noopener"
          >
            <Gatsby className="h-4 ml-1 inline" />
          </a>
          , running on
          <a
            aria-label="Netlify"
            title="Netlify"
            href="https://www.netlify.com/"
            rel="noreferrer noopener"
          >
            <Netlify className="h-4 ml-1 inline" />
          </a>
          . Illustration from
          <a
            aria-label="Open Peeps"
            title="Open Peeps"
            href="https://www.openpeeps.com/"
            rel="noreferrer noopener"
          >
            <Flo className="h-4 ml-1 inline" />
          </a>
          .
        </div>
        <div className="flex items-center -ml-4 sm:-ml-0 -mr-4">
          <a
            aria-label="RSS"
            title="RSS"
            className="mx-4"
            href="/rss.xml"
            rel="noreferrer noopener"
          >
            <RSS className="h-4" />
          </a>
          <a
            aria-label="E-mail"
            title="E-mail"
            className="mx-4"
            href="mailto:florian.gaechter@gmail.com"
            rel="noreferrer noopener"
          >
            <Email className="h-4" />
          </a>
          <a
            aria-label="Github"
            title="Github"
            className="mx-4"
            href="https://github.com/floriangaechter/"
            rel="noreferrer noopener"
          >
            <Github className="h-4" />
          </a>
          <a
            aria-label="Twitter"
            title="Twitter"
            className="mx-4"
            href="https://twitter.com/neither1nor0"
            rel="noreferrer noopener"
          >
            <Twitter className="h-4" />
          </a>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
