import React from 'react';

interface IHeader {
  name: string;
}

class Header extends React.PureComponent<IHeader> {
  render() {
    const title = this.props;
    return <h1 className="Header">{title.name}</h1>;
  }
}

export default Header;
