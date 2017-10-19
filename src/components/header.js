import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

function toggleMenu () {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.toggle('open');
}

function closeMenu () {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.remove('open');
}

const Header = () => (
  <header>
      <button className="toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
      </button>
      <nav>
        <ul className="site-nav">
          <li className="logo">
          <Link to="/" onClick={closeMenu}>
            <svg width="200" height="134" viewBox="0 0 400 268">
              <g>
                <g>
                  <path d="M157.9,5.7c-1.2-2.1-2.9-3.8-5.5-5.7C122.3,30.7,89.5,59.4,55,85.1l-4.4,3.3l1.5-5.3c0.8-2.7,1.7-5.4,2.6-8
                    c0.6-1.6,1.1-3.3,1.6-4.9c4.5-13.9,9.7-30.5,14.1-47.9c0.9-3.4,1.6-7.2,1-10.9c-0.4-3.3-2-5.3-4.8-6.4c-2.9-1.1-6-1-9.2,0.2
                    c-1.9,0.7-3.8,1.7-5.6,2.7l-0.3,0.2c-1.7,0.9-3.4,1.8-5,2.8c-2.8,1.6-5.7,3.2-8.7,4.7c-10.1,4.9-19.5,7.2-28.9,6.8
                    c0.2,1,0.8,2,1.6,3.1c3.1,4.1,7.3,6,13.2,6c0.6,0,1.3,0,1.9-0.1c3.3-0.2,6.7-0.9,11.1-2.3c6-1.9,11.3-4.4,16.7-8l3.5-2.3l-0.8,5
                    C56,24.3,56,24.7,55.9,25c-4.9,17.2-11,35-19,54.3c-3.8,9.2-7.7,18.5-11.5,27.4c-3.6,8.5-7.2,17.1-10.8,25.7
                    c-3,7.3-5.9,14.7-8.8,22c-1.6,4.2-3.3,8.4-4.9,12.5c-2.6,6.4,0.7,12.7,4.8,15.9c1.9,1.5,3.4,1.9,5.2,1.5c0-0.1,0.1-0.1,0.1-0.2
                    c0.4-0.7,0.7-1.4,1-2.1c1.8-4.6,3.7-9.1,5.5-13.7c1.7-4.2,3.3-8.3,5-12.5c7.3-18.1,14.6-36.1,21.9-54.2c0.2-0.6,0.5-1.1,0.8-1.8
                    l2.2-4.6l2.2,4.9c0.4,0.8,0.7,1.6,1,2.3c3.2,7.3,5.9,14.6,8.1,21.8c2.1,7,4.1,14,6.1,21.1c1.1,3.8,2.1,7.5,3.2,11.3
                    c4.3,14.9,8.3,27.3,14.2,39.1c5.7,11.6,12.3,20.9,20,28.3c7.3,7.1,15.6,12.4,24.4,15.8c4,1.5,8.5,2.7,13.8,3.2
                    c7.5,0.7,13-4.3,11.9-7.2c-0.5-1.2-1.6-1.5-1.9-1.5c-0.6,0-1.4,0.4-2.4,1.2c-2.1,1.6-4.3,2.3-6.7,2c-1.8-0.2-3.5-0.7-5.2-1.3
                    c-5.3-2.1-9.4-5.7-13.9-9.8c-6.1-5.6-11.5-12.7-16.7-21.7c-5.3-9.4-9.9-20.1-13.9-33c-1.9-6.2-3.8-12.5-5.7-18.8
                    c-1.5-5.1-3.1-10.3-4.7-15.4c-3.6-11.6-7.8-21.8-12.8-31c-0.9-1.7-1.7-3.6-2.1-5.5c-0.9-3.6,0.2-6.5,3.1-8.7
                    c6.6-4.8,12-8.9,17.4-13.3c9.2-7.5,18.2-15.1,26.9-22.7c5.4-4.7,10.8-9.7,16.3-15c7.8-7.6,15.5-15.5,23-23.1l2-2
                    c1-1.1,1.9-2.4,2.6-3.6C159.3,10.3,159.3,8,157.9,5.7z"/>
                    <path d="M342.1,170.2c4.4-5.2,7.7-11.4,10.4-16.8c7.8-15.5,12.1-31.9,12.7-48.8c0.3-8.7-0.7-17.7-3-26.6
                      c-0.9-3.6-2.1-7.3-4.2-10.7c-2.1-3.4-4.8-5.4-8.3-6.1c-1.4-0.3-2.4-0.3-3.3-0.1c15.4,42.3-0.6,84.3-22.2,105.7l-1.8,1.8l-1.1-2.3
                      c-1.8-3.7-2.8-7.9-3.2-13.2c-0.4-5.4-0.2-11.2,0.6-17.7c0.3-2.6,0.7-5.2,1.1-7.8c0.5-3.8,1.1-7.8,1.5-11.6c0.4-4.1-1-7.1-4.3-9
                      c-2.6-1.5-5.7-2.5-9.7-3l0,0c-7.3,20.2-17,38.1-29.8,54.6l-2.4,3.1c0,0-5.4-14.6,3.7-44.1c1.7-5.6,4-11.2,6.1-16.6l2.2-5.9
                      c1.1-3,0.6-5.5-1.7-7.5c-3.1-2.7-6.9-3.5-11.4-4.2l-0.2,0.2c-0.5,0.7-1,1.3-1.4,2c-2.5,3.7-4.9,7.5-7.4,11.2
                      c-5.2,7.9-10.5,16-15.9,23.9c-9,13.1-19.1,25-29.9,35.3c-0.5,0.5-1.1,1-1.6,1.5l-3.2,2.8c0,0-5.4,3.3,18.3-52.1l0.7-1.5
                      c1.8-4,3.6-8.1,5.2-12.2c2.1-5.6,0.8-10.4-3.9-14.7c-3.3-2.9-7.3-4.5-12.3-4.7c-4.2-0.2-8.3,0.6-13.7,2.4
                      c-9.3,3.2-18.5,7.9-28.3,14.3c-12.2,8-23.1,17.5-33.3,26.4c-0.6,0.5-1.2,1-1.7,1.5c0,0-2.2,1.8-2.8,2.3s-1-1.1-1-1.1
                      c-0.4-1.2,2.2-8.4,3.1-10.5c2.3-5,4.6-10.2,6.9-15.4c1.1-2.5,2.4-5.8,3.3-9.2c0.9-3.7,0.6-6.7-1-9.2c-2-3-3.8-4.2-6.3-4.1
                      l-0.1,0.2c-0.4,0.7-0.7,1.3-1,1.9c-11.6,22.5-22.2,45.3-31.7,67.8c-2.7,6.3-4.8,11.9-6.6,17.1c-1.4,4.2-1.5,8.6-0.3,12.8
                      c1.1,3.6,2.8,5.8,5.4,6.9c2.8,1.2,5.3,0.2,5.4-2.1c0.3-4.9,2.1-9.4,5.2-13.5c5.7-7.4,10.6-13.4,15.3-18.9
                      c11.2-13.1,23.5-24.8,36.7-34.8c14.4-10.9,28.8-18.8,44-24.2c0.7-0.2,1.4-0.5,2.3-0.7l5.1-1.6l-1.8,4.4c-0.2,0.4-0.3,0.7-0.4,0.9
                      l-3.2,7.6c-2.2,5.2-4.3,10.4-6.5,15.6l-3.1,7.4c-3.3,8-6.8,16.3-10.1,24.5c-3,7.5-4.2,13.9-3.6,20.3c0.5,6.3,2.8,11.1,6.8,14.5
                      c4.1,3.6,9.2,3.7,13.1,0.3c1.3-1.2,2.8-2.6,4.2-4.1c2.4-2.7,4.8-5.5,7.2-8.3c1.3-1.5,2.7-3.1,4-4.6c6.3-7.3,12.6-14.6,19-21.8
                      c1.1-1.2,2.2-2.4,3.3-3.7l4.9-5.5v6.1c0,0.8,0,1.4,0,2.1c-0.3,10,2.6,19.2,8.6,27.5c3.1,4.3,6.1,6.6,9.7,7.4
                      c3.8,0.9,6.6,0,8.8-2.7c0.9-1.2,1.8-2.4,2.5-3.6c2-3.3,4-6.5,6-9.8l3.9-6.4c0.3-0.5,0.6-0.9,1-1.4l2.5-3.4l1.5,3.9
                      c0.2,0.5,0.4,1,0.5,1.4c1.7,5.4,4.3,10.5,7.5,15.2c2.7,3.9,5.5,6.6,8.7,8.4c4.9,2.8,9.7,2.6,14.3-0.6
                      C338.2,174.3,340.2,172.5,342.1,170.2z"/>
                  </g>
                </g>
              </svg>
            </Link>
          </li>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about/" onClick={closeMenu}>About</Link></li>
          <li><Link to="/galleries/" onClick={closeMenu}>Galleries</Link></li>
          <li><Link to="/investment/" onClick={closeMenu}>Investment</Link></li>
          <li><Link to="/contact/" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
  </header>
)

export default Header
