import React from 'react'
import ScrollToTop from 'react-scroll-up'

const style = {
  position: 'relative',
  right: 0,
  bottom: 0,
  cursor: 'pointer',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'linear',
  transitionDelay: '0s'
}

const Up = () => {
  return (
    <div className="up-button">
      <ScrollToTop className="test" showUnder={160} duration={500} style={style}>
        <div className="up-button__arrow">&uarr;</div>
      </ScrollToTop>
    </div>
  )
}

export default Up
