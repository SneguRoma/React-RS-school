import React from 'react';

class ErrorPage extends React.Component {
  hi = 'ошибочка вышла';

  render() {
    return <h1 className="ErrorPage">{this.hi}</h1>;
  }
}

export default ErrorPage;
