import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

interface INav {
  main: string;
  about: string;
  form: string;
}

const Nav = () => {
  const nav: INav = {
    main: 'Main',
    about: 'About',
    form: 'Form',
  };

  const [currentPage, setCurrentPage] = useState(true);

  const changePage = () => {
    setCurrentPage(!currentPage);
  };

  const curPage = window.location.pathname.slice(1) || 'main';
  const page = curPage === 'main' || curPage === 'about' || curPage === 'form' ? curPage : 'error';

  return (
    <nav className="navigation_links">
      <h3 className="cur_page navigation_link">{'Current page:   ' + page}</h3>
      <Link to="/" className="navigation_link" onClick={changePage}>
        {nav.main}
      </Link>
      <Link to="/about" className="navigation_link" onClick={changePage}>
        {nav.about}
      </Link>
      <Link to="/form" className="navigation_link" onClick={changePage}>
        {nav.form}
      </Link>
    </nav>
  );
};

export default Nav;
