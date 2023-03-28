import React, { Component, ChangeEventHandler } from 'react';
import './index.css';

type InputFormType = {
  className: string;
};

type InputFormState = {
  searchField: string;
};

class InputForm extends Component<InputFormType, InputFormState> {
  go = 'Go';

  constructor(props: InputFormType) {
    super(props);
    this.state = { searchField: localStorage.getItem('searchField') ?? '' };
  }

  componentDidMount(): void {
    this.setState({ searchField: localStorage.getItem('searchField') ?? '' });
  }

  componentWillUnmount(): void {
    const search = this.state;

    localStorage.setItem('searchField', search.searchField);
  }

  searchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <form className="search">
        <input
          type="input"
          placeholder="input search"
          value={this.state.searchField}
          onChange={this.searchChange}
          className={this.props.className}
        />
        <button type="submit">{this.go}</button>
      </form>
    );
  }
}

export default InputForm;
