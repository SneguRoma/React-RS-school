import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import './index.css';

type RadioProps = {
  id: string;
  name: string;
  value: string;
  defaultChecked: boolean;
  register: ReturnType<UseFormRegister<FieldValues>>;
};

const UnruledRadio = (props: RadioProps) => {
  return (
    <React.Fragment>
      <input
        key={'input' + props.id}
        type="radio"
        className={'radio__button'}
        id={props.name}
        //name={props.name}
        value={props.value}
        {...props.register}
        defaultChecked={props.defaultChecked}
      />
      <label key={'label' + props.id} htmlFor={props.name} className="checkbox__label">
        {props.value}
      </label>
    </React.Fragment>
  );
};

export default UnruledRadio;
