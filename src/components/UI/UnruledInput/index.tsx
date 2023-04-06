import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import './index.css';

type InputTextProps = {
  className: string;
  register: ReturnType<UseFormRegister<FieldValues>>;
};

const UnruledInput = (props: InputTextProps) => {
  return (
    <React.Fragment>
      <label htmlFor="text-input">
        <h4> Name: </h4>
      </label>
      <input
        type="text"
        id="text-input"
        placeholder="input name"
        {...props.register}
        className={props.className}
      />
    </React.Fragment>
  );
};

export default UnruledInput;
