import Nav from '../Nav';
import './index.css';
import '../../index.css';

interface IHeader {
  name: string;
}

const Header = (props: IHeader) => {
  return (
    <div className="header">
      <h1 className="header_logo">{props.name}</h1>
      <div className="header_menu">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
