import React from 'react'
import ScrollProgress from 'scrollprogress';

class Progress extends React.Component {
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

    const style = {
      backgroundColor: '#3e3e3e',
      height: '4px',
      position: 'fixed',
      position: 'sticky',
      top: 0,
      zIndex: 9999,
      marginBottom: '-4px',
      width: `${this.state.progress}%`
    };

    return (
      <div
        className="progress-bar"
        style={ style }
      />
    );
  }
}

export default Progress


/*
<svg width="30" height="30" viewBox="0 0 50 50" style={ svgStyle }>
  <circle cx="25" cy="25" r="20" strokeWidth="2" style={ meterStyle } />
  <circle cx="25" cy="25" r="20" strokeWidth="2" style={ valueStyle } />
</svg>
*/
