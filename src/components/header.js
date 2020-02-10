import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavigationLink = ({ to, children, home = false }) => (
  <Link
    className="pt-4 text-light-blue-vivid-700 flex items-center mx-4 transition-colors duration-300 ease-in-out hover:text-light-blue-vivid-900"
    to={to}
    activeClassName="text-light-blue-vivid-900"
    partiallyActive={!home}
  >
    {children}
  </Link>
)

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  home: PropTypes.bool,
}

const Header = () => (
  <header className="pb-12 pt-8 mb-12 border-b border-cool-grey-100">
    <nav className="font-bold flex flex-wrap -ml-4">
      <NavigationLink to="/" home={true}>
        Home
      </NavigationLink>
      <NavigationLink to="/blog">Blog</NavigationLink>
    </nav>
  </header>
)

export default Header
