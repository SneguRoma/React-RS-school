import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

interface INav {
  main: string;
  about: string;
  error: string;
}

type INavProps = Record<string, never>;
type INavState = {
  currentPage: boolean;
};

class Nav extends Component<INavProps, INavState> {
  nav: INav = {
    main: 'Main',
    about: 'About',
    error: 'Error',
  };
  constructor(props: INavProps) {
    super(props);
    this.state = { currentPage: true };
  }

  changePage = () => {
    this.setState({ currentPage: !this.state.currentPage });
  };

  render() {
    console.log(window.location.pathname.slice(1));
    const curPage = window.location.pathname.slice(1) || 'main';
    const page = curPage === 'main' || curPage === 'about' ? curPage : 'error';

    return (
      <nav className="navigation_links">
        <h3 className="cur_page navigation_link">{'Current page:   ' + page}</h3>
        <Link to="/" className="navigation_link" onClick={this.changePage}>
          {this.nav.main}
        </Link>
        <Link to="/about" className="navigation_link" onClick={this.changePage}>
          {this.nav.about}
        </Link>
        <Link to="/error" className="navigation_link" onClick={this.changePage}>
          {this.nav.error}
        </Link>
      </nav>
    );
  }
}

export default Nav;
