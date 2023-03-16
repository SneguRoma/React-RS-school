import React, { Component } from 'react';
import CardsList from '../../components/CardsList';
import InputForm from '../../components/InputForm';

class MainPage extends Component {
  inputClass = 'search_form';

  render() {
    // const serchField = this.state;
    return (
      <div>
        <InputForm className={this.inputClass} />
        <CardsList />
      </div>
    );
  }
}

export default MainPage;
