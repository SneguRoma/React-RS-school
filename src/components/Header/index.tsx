import React, { PureComponent } from 'react';
import Nav from '../Nav';
import './index.css';

interface IHeader {
  name: string;
}

class Header extends PureComponent<IHeader> {
  render() {
    return (
      <div className="header">
        <h1 className="header_logo">{this.props.name}</h1>
        <div className="header_menu">
          <Nav />
        </div>
      </div>
    );
  }
}

export default Header;
