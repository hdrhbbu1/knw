import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";

var settings = {
  //dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const Slick = () => (
  <Slider className="slider"{...settings}>
    <div><img src="http://via.placeholder.com/300x200"/></div>
    <div><img src="http://via.placeholder.com/300x200"/></div>
    <div><img src="http://via.placeholder.com/300x200"/></div>
  </Slider>
)

export default Slick
