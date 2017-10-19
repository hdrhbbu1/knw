import React from 'react'
import Link from 'gatsby-link'


const IndexPage = () => (
  <div>
    <div className="intro">
      <h1>KNW Photography</h1>
      <img src="http://knw.io/wp-content/uploads/2016/03/walking-into-sunset-ocean-beach-sf.jpg" />
    </div>

    <div className="quote">
      <blockquote>
        Some sort of inspiring snippet of text should go here.
      </blockquote>
    </div>


    <div className="featured">

      <div className="featured__newest">
        <h2>Recent Work</h2>
        <img src="http://knw.io/wp-content/uploads/2017/07/key-largo-ocean-reach-indian-fusion-wedding-58.jpg" />
      </div>

      <ul className="featured__list">
        <li>
          <img src="http://knw.io/wp-content/uploads/2017/07/long-beach-ebell-leafy-green-wedding-55.jpg" />
          <h3>9.10.2017</h3>
        </li>
        <li>
          <img src="http://via.placeholder.com/900x600" />
          <h3>9.10.2017</h3>
        </li>
        <li>
          <img src="http://via.placeholder.com/900x600" />
          <h3>9.10.2017</h3>
        </li>
        <li>
          <img src="http://via.placeholder.com/900x600" />
          <h3>9.10.2017</h3>
        </li>
        <li>
          <img src="http://via.placeholder.com/900x600" />
          <h3>9.10.2017</h3>
        </li>
      </ul>
    </div>

    <div className="bio">
      <div className="bio__inner">
        <h2>Meet the photographer</h2>
        <img className="bio__image" src="http://via.placeholder.com/900x600" />
        <Link to="/about">Learn More About Kirsten &rarr;</Link>
      </div>
    </div>

  <div className="page">
  </div>

</div>
)

export default IndexPage
