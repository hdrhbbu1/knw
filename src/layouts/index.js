import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import Menu from '../components/menu'
import Footer from '../components/footer'

import '../stylesheets/style.scss'

const closeOverlay = () => {
  const wrapper = document.getElementById('wrapper');
  wrapper.className = '';
}

const TemplateWrapper = ({ children, location }) => (
  <div id="wrapper">

    <Helmet>
      <title>KNW Photography - SF Bay Area Wedding Photographer</title>
      <link rel="icon" href={favicon} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="KNW Photography helps clients capture special moments in lifestyle and wedding photography in the San Francisco Bay Area." />
      <meta property="og:title" content="KNW Photography - SF Bay Area Wedding Photographer" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="KNW Photography" />
      <meta property="og:url" content="https://www.knw.io" />
    </Helmet>

    <Menu/>

    <section className="container" onClick={closeOverlay}>
      {children()}
      <Footer/>
    </section>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
