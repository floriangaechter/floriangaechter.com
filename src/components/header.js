import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as About } from "../images/about.svg"
import { ReactComponent as Blog } from "../images/blog.svg"
import { ReactComponent as Contact } from "../images/contact.svg"

const NavigationLink = ({ to, children, home = false }) => (
  <Link
    className="text-light-blue-vivid-700 flex items-center mx-4 transition-colors duration-300 ease-in-out hover:text-light-blue-vivid-900"
    to={to}
    activeClassName="text-light-blue-vivid-900"
    partiallyActive={!home}
  >
    {children}
  </Link>
)

const NavigationIcon = ({ children }) => (
  <div className="bg-light-blue-vivid-100 mr-2 rounded p-1">{children}</div>
)

const Header = ({ siteTitle }) => (
  <header className="py-12 mb-12 border-b border-cool-grey-100">
    <nav className="font-bold flex -ml-4">
      <NavigationLink to="/" home={true}>
        <NavigationIcon>
          <About className="h-4" />
        </NavigationIcon>
        About
      </NavigationLink>
      <NavigationLink to="/blog">
        <NavigationIcon>
          <Blog className="h-4" />
        </NavigationIcon>
        Blog
      </NavigationLink>
      <NavigationLink to="/contact">
        <NavigationIcon>
          <Contact className="h-4" />
        </NavigationIcon>
        Contact
      </NavigationLink>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
