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

      const radius = 20;
      const circumference = 2 * Math.PI * radius;
      const dashoffset = circumference * (1 - progress)
      const progress = y * 100

      this.setState({
        progress: progress,
        dashArray: circumference,
        dashOffset: dashoffset
      });

    });


  }

  componentWillUnmount() {
    this.progressObserver.destroy();
  }


  render() {

    const svgStyle = {
      transform: 'rotate(-90deg)'
    }

    const meterStyle= {
      fill: 'none',
      stroke: '#e6e6e6'
    }

    const valueStyle= {
      fill: 'none',
      stroke: '#3e3e3e',
      strokeLinecap: 'round',
      strokeDasharray: `${this.state.dashArray}`,
      strokeDashoffset: `${this.state.dashOffset}`
    }

    return (
      <svg width="30" height="30" viewBox="0 0 50 50" style={ svgStyle }>
        <circle cx="25" cy="25" r="20" strokeWidth="2" style={ meterStyle } />
        <circle cx="25" cy="25" r="20" strokeWidth="2" style={ valueStyle } />
      </svg>
    );
  }
}

export default Progress


/*

<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" style={ line } />
  <circle cx="50" cy="50" r="40" style={ placeholder } />
</svg>

*/
