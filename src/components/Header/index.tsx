import React from 'react';
import Nav from '../Nav';

interface IHeader {
  name: string;
}

class Header extends React.PureComponent<IHeader> {
  render() {
    const title = this.props;
    return (
      <div className="header">
        <h1 className="header">{title.name}</h1>
        <div className="header_menu">
          <Nav />
        </div>
      </div>
    );
  }
}

export default Header;
