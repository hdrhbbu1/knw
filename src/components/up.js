import React from 'react'
import Headroom from 'react-headroom'
if (typeof window !== `undefined`) {
  require('smoothscroll-polyfill').polyfill();
  window.__forceSmoothScrollPolyfill__ = true;
}

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
        <div className="up-button__text">Back To Top</div>
      </Headroom>
    </div>
  )
}

export default Up
