import React, { Component, RefObject } from 'react';
import './index.css';

type InputDateProps = {
  className: string;
  dateRef: RefObject<HTMLInputElement>;
};

class UnruledDate extends Component<InputDateProps> {
  constructor(props: InputDateProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor="date-input">
          {' '}
          <h4> Date of birth:</h4>
        </label>
        <input
          type="date"
          id="date-input"
          placeholder="input date"
          ref={this.props.dateRef}
          className={this.props.className}
        />
      </div>
    );
  }
}

export default UnruledDate;
