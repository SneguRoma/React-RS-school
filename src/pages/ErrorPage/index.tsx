import React from 'react';

class ErrorPage extends React.Component {
  hi = 'ohhoho something wrong...';

  render() {
    return <h2 className="about">{this.hi}</h2>;
  }
}

export default ErrorPage;
