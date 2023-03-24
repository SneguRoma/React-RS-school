import React, { Component, ChangeEventHandler } from 'react';
import './index.css';

type InputFormType = {
  className: string;
};

type InputFormState = {
  inputField: string;
};

class TextInput extends Component<InputFormType, InputFormState> {
  constructor(props: InputFormType) {
    super(props);
    this.state = { inputField: '' };
  }

  inputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ inputField: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <label htmlFor="text-input">
          <h4> Name: </h4>
        </label>
        <input
          type="text"
          id="text-input"
          placeholder="input name"
          value={this.state.inputField}
          onChange={this.inputChange}
          className={this.props.className}
        />
      </React.Fragment>
    );
  }
}

export default TextInput;
