import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

interface INav {
  main: string;
  about: string;
  form: string;
}

type INavProps = Record<string, never>;
type INavState = {
  currentPage: boolean;
};

class Nav extends Component<INavProps, INavState> {
  nav: INav = {
    main: 'Main',
    about: 'About',
    form: 'Form',
  };
  constructor(props: INavProps) {
    super(props);
    this.state = { currentPage: true };
  }

  changePage = () => {
    this.setState({ currentPage: !this.state.currentPage });
  };

  render() {
    const curPage = window.location.pathname.slice(1) || 'main';
    const page =
      curPage === 'main' || curPage === 'about' || curPage === 'form' ? curPage : 'error';

    return (
      <nav className="navigation_links">
        <h3 className="cur_page navigation_link">{'Current page:   ' + page}</h3>
        <Link to="/" className="navigation_link" onClick={this.changePage}>
          {this.nav.main}
        </Link>
        <Link to="/about" className="navigation_link" onClick={this.changePage}>
          {this.nav.about}
        </Link>
        <Link to="/form" className="navigation_link" onClick={this.changePage}>
          {this.nav.form}
        </Link>
      </nav>
    );
  }
}

export default Nav;
