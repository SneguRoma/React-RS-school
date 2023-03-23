import React, { Component, ChangeEventHandler } from 'react';
import './index.css';

type InputFormType = {
  className: string;
};

type InputFormState = {
  inputField: string;
};

class DateInput extends Component<InputFormType, InputFormState> {
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
        <label htmlFor="date-input">Name</label>
        <input
          type="date"
          id="date-input"
          placeholder="input date"
          value={this.state.inputField}
          onChange={this.inputChange}
          className={this.props.className}
        />
      </React.Fragment>
    );
  }
}

export default DateInput;
