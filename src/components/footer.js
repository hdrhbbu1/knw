import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer className="footer">
    <section className="footer__outer">
      <section className="footer__inner">
        <div className="footer__info">
          <h3><Link to="/">KNW Photography</Link></h3>
          <p>All images &copy; {new Date().getFullYear()} KNW Photography. <br/>Website powered by <a href="https://www.contentful.com/" target="_blank">Contentful</a> and <a href="https://www.netlify.com/" target="_blank">Netlify</a>.</p>
        </div>
        <div className="footer__sitemap">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/galleries/">Galleries</Link></li>
            <li><Link to="/investment/">Investment</Link></li>
            <li><Link to="/contact/">Contact</Link></li>
          </ul>
        </div>
      </section>
    </section>
  </footer>
)

export default Footer
