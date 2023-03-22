import React, { Component, ChangeEventHandler } from 'react';
import './index.css';

type InputFormType = {
  className: string;
};

type InputFormState = {
  selectFields: string[];
  value: string;
  defaultValue: string;
};

class SelectInput extends Component<InputFormType, InputFormState> {
  constructor(props: InputFormType) {
    super(props);
    this.state = {
      selectFields: [],
      value: '',
      defaultValue: '',
    };
  }

  inputChange: ChangeEventHandler<HTMLInputElement> = (/* e */) => {
    //this.setState({ selectFields: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <label htmlFor="select-input">Name</label>
        {/* <select
              value={this.state.value}
              onChange={(event) => onChange(event.target.value)}
              className={this.props.className}
            >
          <option disabled value="" className = {this.state.selectFields}>{this.state.defaultValue}</option>
          {options.map((option:  ProductOpts )=> 
            <option key = {option.id} value = {option.value} className={classes.option}>
                  {option.name}
            </option>
            ))}
            </select> */}
      </React.Fragment>
    );
  }
}

export default SelectInput;
