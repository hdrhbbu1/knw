import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../stylesheets/style.scss'

const Header = () => (
  <header>
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

const Footer = () => (
  <footer>
    <p>&copy; 2017 KNW Photography</p>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="KNW Photography"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
