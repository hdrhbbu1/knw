import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const toggleDrawer = () => {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.toggle('open--drawer');
}

const closeDrawer = () => {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.remove('open--drawer');
}

const Categories = props => {
    return (
      <div className="category-navigation">
        <div className="category-navigation__header">
          <h2><span>Filter by / </span><button onClick={toggleDrawer}>{props.title}</button></h2>
        </div>
        <ul className="category-navigation__links">
          <li><Link to="/galleries/" onClick={closeDrawer}>All</Link></li>
          <li><Link to="/lifestyle/" onClick={closeDrawer}>Lifestyle</Link></li>
          <li><Link to="/wedding/" onClick={closeDrawer}>Wedding</Link></li>
        </ul>
      </div>
    )
}

export default Categories

Categories.propTypes = {
  toggleDrawer: PropTypes.func,
  closeDrawer: PropTypes.func,
  title: PropTypes.string.isRequired,
}
