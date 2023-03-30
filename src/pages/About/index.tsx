import React from 'react';
import './index.css';

class About extends React.Component {
  hi = 'This page about us';

  render() {
    return <h2 className="about">{this.hi}</h2>;
  }
}

export default About;
