import React, { Component } from 'react';
import './index.css';

type InputFormType = {
  className: string;
};

type ISelect = {
  name: string;
  id: number;
};

type InputFormState = {
  value: string;
  defaultValue: string;
  options: ISelect[];
};

const opts: ISelect[] = [
  { name: 'cat', id: 1 },
  { name: 'dog', id: 2 },
  { name: 'penguin', id: 3 },
];

class SelectInput extends Component<InputFormType, InputFormState> {
  constructor(props: InputFormType) {
    super(props);
    this.state = {
      value: '',
      defaultValue: '',
      options: opts,
    };
  }

  inputChange = (e: string) => {
    this.setState({ value: e });
  };

  render() {
    return (
      <React.Fragment>
        <label htmlFor="select-input">
          <h4> Kind of animal: </h4>
        </label>
        <select
          value={this.state.value}
          onChange={(event) => this.inputChange(event.target.value)}
          className={this.props.className}
        >
          <option disabled value=""></option>
          {this.state.options.map((option: ISelect) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

export default SelectInput;
