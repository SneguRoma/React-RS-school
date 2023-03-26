import React, { Component, RefObject } from 'react';
import './index.css';

type InputTextProps = {
  className: string;
  textRef: RefObject<HTMLInputElement>;
};

class UnruledInput extends Component<InputTextProps> {
  constructor(props: InputTextProps) {
    super(props);
  }

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
          ref={this.props.textRef}
          className={this.props.className}
        />
      </React.Fragment>
    );
  }
}

export default UnruledInput;
