import React, { Component, RefObject } from 'react';
import './index.css';

type CheckBoxProps = {
  id: string;
  name: string;
  checkRef: RefObject<HTMLInputElement>;
};

class UnruledCheckbox extends Component<CheckBoxProps> {
  constructor(props: CheckBoxProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <input
          key={'input' + this.props.id}
          type="checkbox"
          className={'checkbox__button'}
          id={this.props.name}
          name={this.props.name}
          defaultChecked={false}
          ref={this.props.checkRef}
        />

        <label key={'label' + this.props.id} htmlFor={this.props.name} className="checkbox__label">
          {this.props.name}
        </label>
      </React.Fragment>
    );
  }
}

export default UnruledCheckbox;
