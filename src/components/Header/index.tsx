import Nav from '../Nav';
import './index.css';

interface IHeader {
  name: string;
}

const Header = (props: IHeader) => {
  return (
    <header className="header">
      <h1 className="header_logo">{props.name}</h1>
      <Nav />
    </header>
  );
};

export default Header;
