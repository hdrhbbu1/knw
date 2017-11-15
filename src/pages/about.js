import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import cover from '../images/about-cover.jpg'

const About = () => (
  <div>
    <Helmet>
      <title>About</title>
      <meta name="description" content="All about Kirsten Wiemer" />
    </Helmet>

    <div className="intro--about">
      <div className="intro--about__image">
        <img src={cover} />
      </div>
      <h2>All About Kirsten</h2>
    </div>

  </div>
)

export default About
