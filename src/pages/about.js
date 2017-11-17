import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Slider from 'react-slick'

import grid1 from '../images/grid1.jpg'
import grid2 from '../images/grid2.jpg'
import grid3 from '../images/grid3.jpg'
import bleed1 from '../images/bleed1.jpg'

const sliderSettings = {
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  swipeToSlide: true,
  draggable: false,
  centerMode: true,
  arrows: true,
  touchMove: true,
  dots: true,
  responsive: [{ breakpoint: 640, settings: { draggable: true, arrows: false} }]
}

const About = () => (
  <div>
    <Helmet>
      <title>About</title>
      <meta name="description" content="All about Kirsten Wiemer" />
    </Helmet>

    <ul className="grid grid--about">
      <li className="cell cell--half">
        <h2>About</h2>
        <div className="about-image--3">
          <img src={grid1} />
        </div>
        <p>Lorem ipsum dolor set amet.</p>
      </li>
      <li className="cell cell--half">
        <div className="about-image--1">
          <img src={grid2} />
        </div>
        <div className="about-image--2">
          <img src={grid3} />
        </div>
      </li>
    </ul>

    <div className="bio">
      <p>Hi there! I’m Kirsten and I’m currently living in Oakland with my husband and fluffy pup Birch. I’ve always been an excessive photo taker and decided to turn my love for taking photos into a career. I love chasing my clients around to capture those little moments and growing with you as I document your day. I’m always chasing the light looking for shadows, and I’m also obsessed with the fog that we have here in the Bay. Whether it’s in your home, in hills, on the busy city streets, or wherever it may be I’m up for any adventure with my clients.</p>
      <p>Outside of photography I love eating food that’s covered in cheese. I’m beyond obsessed with my pup, he’s easily the best looking in our family. I love working on the potter’s wheel, back in college all of my favorite courses were in the ceramics lab and I’m always itching to get back in there. I spend most of my extra time hiking and exploring the Bay Area with my dudes. I’m always looking to make new friends as we are still pretty new to the Bay Area so if you’d like to get together and play with my fluffy pup email me any time!</p>
    </div>

    <div className="full-bleed">
      <img src={bleed1} />
    </div>

    <div className="grid grid--container">
      <div className="cell cell--half bucket-list">
        <h3>Bucket List</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
      <div className="cell cell--half slider--about">
        <Slider {...sliderSettings}>
          <div><img src="http://via.placeholder.com/100x100" /></div>
          <div><img src="http://via.placeholder.com/200x200" /></div>
          <div><img src="http://via.placeholder.com/300x300" /></div>
          <div><img src="http://via.placeholder.com/400x400" /></div>
          <div><img src="http://via.placeholder.com/500x500" /></div>
        </Slider>

      </div>
    </div>

  </div>
)

export default About
