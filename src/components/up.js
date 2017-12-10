import React from 'react'
import Headroom from 'react-headroom'
import ScrollProgress from 'scrollprogress'
import styled from 'styled-components'

if (typeof window !== `undefined`) {
  require('smoothscroll-polyfill').polyfill();
  window.__forceSmoothScrollPolyfill__ = true;
}

const scrollUp = () => {
  document.querySelector('.container').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

class Up extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    this.progressObserver = new ScrollProgress((x, y) => {
      this.setState({
        progress: y * 100,
      });
    });
  }

  componentWillUnmount() {
    this.progressObserver.destroy();
  }

  render() {
    const Progress = styled.div`
      width: ${this.state.progress}%;
      background: #3e3e3e;
      height: 4px;
      top: 0;
      z-index: 99999;
      position: absolute;
      margin-top: -4px;
    `;

    return (
      <div className="up-button" onClick={scrollUp}>
        <Headroom disableInlineStyles pinStart={300}>
          <Progress/>
          <div className="up-button__text">Back To Top</div>
        </Headroom>
      </div>
    );
  }


}

export default Up
