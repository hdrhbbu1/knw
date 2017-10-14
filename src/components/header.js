import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Header = () => (
  <header>
      <button className="toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav>
        <ul>
          <li><h1><Link to="/">KNW Photography</Link></h1></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/galleries/">Galleries</Link></li>
          <li><Link to="/investment/">Investment</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>
      </nav>
  </header>
)

export default Header
