import React from 'react';

class About extends React.Component {
  hi = 'Страница о нас';

  render() {
    return <h1 className="about">{this.hi}</h1>;
  }
}

export default About;
