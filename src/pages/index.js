import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="intro">
      <h1>KNW Photography</h1>
      <img src="http://via.placeholder.com/900x600" />
    </div>

    <div className="quote">
      <blockquote>
        Some sort of inspiring snippet of text should go here.
      </blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae ipsum et purus rhoncus commodo non in diam. Nullam ullamcorper purus augue, tincidunt rhoncus velit imperdiet et. Cras imperdiet imperdiet ex, eget maximus nibh tincidunt id. Proin a dictum nisi, et venenatis est. Ut finibus turpis at arcu gravida, nec pulvinar tortor pretium.</p>
    </div>


    <div className="featured">

      <div className="featured__newest">
        <h2>Recent Work</h2>
        <img src="http://via.placeholder.com/900x600" />
      </div>

      <ul className="featured__list">
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
