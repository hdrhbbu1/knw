import React from 'react'
import Headroom from 'react-headroom'
//window.__forceSmoothScrollPolyfill__ = true;
require('smoothscroll-polyfill').polyfill();

const Up = () => {

  const scrollUp = () => {
    document.querySelector('.container').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (
    <div className="up-button" onClick={scrollUp}>
      <Headroom disableInlineStyles pinStart={300}>
        <div className="up-button__text">Back to Top</div>
      </Headroom>
    </div>
  )
}

export default Up
