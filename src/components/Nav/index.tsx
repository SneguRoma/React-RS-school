import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface INav {
  main: string;
  about: string;
  error: string;
}

class Nav extends Component {
  navi: INav = {
    main: 'Main',
    about: 'About',
    error: 'error',
  };

  render() {
    const nav = this.navi;
    return (
      <nav>
        <Link to="/">{nav.main}</Link>
        <Link to="/about">{nav.about}</Link>
        <Link to="/error">{nav.error}</Link>
      </nav>
    );
  }
}

export default Nav;
