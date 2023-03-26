import React, { Component, RefObject } from 'react';
import './index.css';

type RadioProps = {
  id: string;
  name: string;
  value: string;
  defaultChecked: boolean;
  radioRef: RefObject<HTMLInputElement>;
};

class UnruledRadio extends Component<RadioProps> {
  constructor(props: RadioProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <input
          key={'input' + this.props.id}
          type="radio"
          className={'radio__button'}
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
          ref={this.props.radioRef}
          defaultChecked={this.props.defaultChecked}
        />
        <label key={'label' + this.props.id} htmlFor={this.props.name} className="checkbox__label">
          {this.props.value}
        </label>
      </React.Fragment>
    );
  }
}

export default UnruledRadio;
