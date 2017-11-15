import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import Menu from '../components/menu'
import Footer from '../components/footer'
//import withRouter from 'react-router-dom/withRouter'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'

import '../stylesheets/style.scss'
require('typeface-roboto')

const closeMenu = () => {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.remove('open--menu');
}


/* class TransitionHandler extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const {children} = this.props;
    return (
      <div className="transition-container">
        {children}
      </div>
    );
  }
}

<TransitionGroup>
  <CSSTransition
    key={location.pathname}
    classNames="example"
    timeout={{ enter: 500, exit: 300 }}
  >
    <TransitionHandler
      location={location}
    >
    </TransitionHandler>
     </CSSTransition>
   </TransitionGroup>




*/

const TemplateWrapper = ({ children, location }) => (
  <div id="wrapper">

    <Helmet>
      <title>KNW Photography | SF Bay Area Wedding Photographer</title>
      <link rel="icon" href={favicon} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="KNW Photography helps clients capture special moments in lifestyle and wedding photography in the San Francisco Bay Area." />

      <meta property="og:title" content="KNW Photography" />
      <meta property="og:image" content="" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="KNW Photography" />
      <meta property="og:url" content=" " />
    </Helmet>

    <Menu/>

    <section className="container" onClick={closeMenu}>
      {children()}
      <Footer/>
    </section>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
