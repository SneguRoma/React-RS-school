import React, { RefObject } from 'react';
import './index.css';

type CheckBoxProps = {
  id: string;
  name: string;
  checkRef: RefObject<HTMLInputElement>;
};

const UnruledCheckbox = (props: CheckBoxProps) => {
  return (
    <React.Fragment>
      <input
        key={'input' + props.id}
        type="checkbox"
        className={'checkbox__button'}
        id={props.name}
        name={props.name}
        defaultChecked={false}
        ref={props.checkRef}
      />

      <label key={'label' + props.id} htmlFor={props.name} className="checkbox__label">
        {props.name}
      </label>
    </React.Fragment>
  );
};

export default UnruledCheckbox;
