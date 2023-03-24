import React, { Component, createRef } from 'react';
import './index.css';

export type IRadio = {
  id: string;
  name: string;
  value: string;
  defaultChecked: boolean;
};

type RadioProps = {
  id: string;
  name: string;
  value: string;
  defaultChecked: boolean;
};

class RadioInput extends Component<RadioProps, IRadio> {
  radioInput = createRef<HTMLInputElement>();

  constructor(props: RadioProps) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      value: this.props.value,
      defaultChecked: this.props.defaultChecked,
    };
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
          ref={this.radioInput}
          defaultChecked={this.state.defaultChecked}
        />
        <label key={'label' + this.props.id} htmlFor={this.props.name} className="checkbox__label">
          {this.props.value}
        </label>
      </React.Fragment>
    );
  }
}

export default RadioInput;
