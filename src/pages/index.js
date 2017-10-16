import React from 'react'
import Link from 'gatsby-link'


const IndexPage = () => (
  <div>

  <div className="featured">

    <div className="featured__img">
      <h1>KNW Photography</h1>
      <img src="http://via.placeholder.com/900x600" />
    </div>

    <div className="featured__galleries">
      <h2>Recent Galleries</h2>
      <ul>
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

  </div>
  <div className="page">
    <p>Lorem Ipsum dolor</p>
  </div>

</div>
)

export default IndexPage
