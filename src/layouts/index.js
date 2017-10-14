import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import '../stylesheets/style.scss'

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
    <section className="container">
      {children()}
      <Footer />
    </section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
