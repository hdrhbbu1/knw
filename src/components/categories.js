import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Categories = props => {
    return (
      <div className="category-navigation">
        <h2>Galleries</h2>
        <ul className="category-navigation__links">
          <li><Link to="/galleries/">All</Link></li>
          <li><Link to="/lifestyle/">Lifestyle</Link></li>
          <li><Link to="/wedding/">Wedding</Link></li>
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
