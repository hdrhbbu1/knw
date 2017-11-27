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
      this.setState({ progress: y * 100 });
    });
  }

  componentWillUnmount() {
    this.progressObserver.destroy();
  }

  render() {
    const style = {
      backgroundColor: '#3e3e3e',
      height: '5px',
      position: 'fixed',
      top: 0,
      bottom: 0,
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
