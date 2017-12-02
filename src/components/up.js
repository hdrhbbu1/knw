import React from 'react'
import Headroom from 'react-headroom'
require('smoothscroll-polyfill').polyfill();

const windowGlobal = typeof window !== 'undefined' && window
windowGlobal.__forceSmoothScrollPolyfill__ = true;

const Up = () => {

  const scrollUp = () => {
    windowGlobal.scroll({ top: 0, left: 0, behavior: 'smooth' });
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
