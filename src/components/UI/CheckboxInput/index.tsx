import React, { Component } from 'react';
import './index.css';

export type ICheck = {
  id: string;
  name: string;
  checked: boolean;
};

type CheckBoxProps = {
  id: string;
  name: string;
};

class CheckboxInput extends Component<CheckBoxProps, ICheck> {
  constructor(props: CheckBoxProps) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      checked: false,
    };
  }

  inputChange = (e: boolean) => {
    this.setState({ checked: e });
  };

  render() {
    return (
      <React.Fragment>
        <input
          key={'input' + this.props.id}
          type="checkbox"
          className={'checkbox__button'}
          id={this.props.name}
          name={this.props.name}
          onChange={(event) => this.inputChange(event.target.checked)}
          checked={this.state.checked}
        />

        <label key={'label' + this.props.id} htmlFor={this.props.name} className="checkbox__label">
          {this.props.name}
        </label>
      </React.Fragment>
    );
  }
}

export default CheckboxInput;
