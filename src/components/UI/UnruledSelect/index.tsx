import React, { Component, RefObject } from 'react';
import './index.css';

type SelectProps = {
  className: string;
  selectRef: RefObject<HTMLSelectElement>;
};

type ISelect = {
  name: string;
  id: number;
};

const opts: ISelect[] = [
  { name: 'cat', id: 1 },
  { name: 'dog', id: 2 },
  { name: 'penguin', id: 3 },
];

class UnruledSelect extends Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor="select-input">
          <h4> Kind of animal: </h4>
        </label>
        <select ref={this.props.selectRef} defaultValue={''} className={this.props.className}>
          <option disabled value=""></option>
          {opts.map((option: ISelect) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

export default UnruledSelect;
