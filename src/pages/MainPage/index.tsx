import React from 'react';
import CardsList from '../../components/CardsList';

class MainPage extends React.Component {
  hi = 'труляля';

  render() {
    return (
      <div>
        <h1 className="MainPage">{this.hi}</h1>
        <CardsList />
      </div>
    );
  }
}

export default MainPage;
