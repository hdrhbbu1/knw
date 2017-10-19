import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Menu from '../components/menu'
import Footer from '../components/footer'

import '../stylesheets/style.scss'

function closeMenu () {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.remove('open');
}

const TemplateWrapper = ({ children }) => (
  <div id="wrapper">

    <Helmet>
      <title>KNW Photography</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,500" rel="stylesheet"/>
    </Helmet>

    <Menu />

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
