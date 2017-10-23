import React from 'react'
import Link from 'gatsby-link'

function toggleMenu () {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.toggle('open');
}

function closeMenu () {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.remove('open');
}

const Menu = () => {

  return (
    <header>
        <button className="toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
        </button>
        <nav>
          <ul className="site-nav">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about/" onClick={closeMenu}>About</Link></li>
            <li><Link to="/galleries/" onClick={closeMenu}>Galleries</Link></li>
            <li><Link to="/investment/" onClick={closeMenu}>Investment</Link></li>
            <li><Link to="/contact/" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
    </header>
  )
}
export default Menu
