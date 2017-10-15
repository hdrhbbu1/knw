import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import '../stylesheets/style.scss'

function closeMenu () {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.remove('open');
}

const TemplateWrapper = ({ children }) => (
  <div id="wrapper">
    <Helmet
      title="KNW Photography"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      <Header />
      <section className="container" onClick={closeMenu}>
        {children()}
        <Footer />
      </section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
