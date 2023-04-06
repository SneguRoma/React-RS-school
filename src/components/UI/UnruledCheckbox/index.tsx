import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import './index.css';

type CheckBoxProps = {
  id: string;
  name: string;
  register: ReturnType<UseFormRegister<FieldValues>>;
};

const UnruledCheckbox = (props: CheckBoxProps) => {
  return (
    <React.Fragment>
      <input
        key={'input' + props.id}
        type="checkbox"
        className={'checkbox__button'}
        id={props.name}
        //name={props.name}
        defaultChecked={false}
        {...props.register}
      />

      <label key={'label' + props.id} htmlFor={props.name} className="checkbox__label">
        {props.name}
      </label>
    </React.Fragment>
  );
};

export default UnruledCheckbox;
