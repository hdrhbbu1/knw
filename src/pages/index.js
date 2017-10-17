import React from 'react'
import Link from 'gatsby-link'


const IndexPage = () => (
  <div>
    <div className="intro">
      <h1>KNW Photography</h1>
      <img src="http://knw.io/wp-content/uploads/2017/07/summer-san-francisco-lifestyle-coastal-engagement-session-63.jpg" />
    </div>

    <div className="quote">
      <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </blockquote>
    </div>


    <div className="featured">

      <div className="featured__newest">
        <h2>Recent Galleries</h2>
        <img src="http://via.placeholder.com/900x600" />
        <h3>Lorem Ipsum Dolor</h3>
      </div>

      <ul className="featured__list">
        <li>
          <img src="http://via.placeholder.com/900x600" />
          <h3>Lorem Ipsum Dolor</h3>
        </li>
        <li>
          <img src="http://via.placeholder.com/900x600" />
          <h3>Lorem Ipsum Dolor</h3>
        </li>
        <li>
          <img src="http://via.placeholder.com/900x600" />
          <h3>Lorem Ipsum Dolor</h3>
        </li>
        <li>
          <img src="http://via.placeholder.com/900x600" />
          <h3>Lorem Ipsum Dolor</h3>
        </li>
        <li>
          <img src="http://via.placeholder.com/900x600" />
          <h3>Lorem Ipsum Dolor</h3>
        </li>
      </ul>
    </div>

    <div className="bio">
      <div className="bio__inner">
        <h2>Hi, I'm Kirsten.</h2>
        <img src="http://via.placeholder.com/900x600" />
        <Link to="/about">Learn more about me</Link>
      </div>
    </div>

  <div className="page">
  </div>

</div>
)

export default IndexPage
