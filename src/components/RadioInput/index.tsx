import React, { Component } from 'react';
import './index.css';

export type IRadio = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
};

type RadioProps = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
};

class RadioInput extends Component<RadioProps, IRadio> {
  constructor(props: RadioProps) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      value: this.props.value,
      checked: this.props.checked,
    };
  }

  inputChange = (e: boolean, item: string) => {
    this.setState({ checked: e });
    console.log(item, e);
  };

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
          onChange={(event) => this.inputChange(event.target.checked, event.target.value)}
          checked={this.state.checked}
        />

        <label key={'label' + this.props.id} htmlFor={this.props.name} className="checkbox__label">
          {this.props.value}
        </label>
      </React.Fragment>
    );
  }
}

export default RadioInput;
