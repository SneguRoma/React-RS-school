import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import './index.css';

type SelectProps = {
  className: string;
  register: ReturnType<UseFormRegister<FieldValues>>;
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

const UnruledSelect = (props: SelectProps) => {
  1;
  return (
    <React.Fragment>
      <label htmlFor="select-input">
        <h4> Kind of animal: </h4>
      </label>
      <select defaultValue={''} {...props.register} className={props.className}>
        <option disabled value=""></option>
        {opts.map((option: ISelect) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default UnruledSelect;
