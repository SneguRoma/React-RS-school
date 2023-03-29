import React, { RefObject } from 'react';
import './index.css';

type InputTextProps = {
  className: string;
  textRef: RefObject<HTMLInputElement>;
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
        ref={props.textRef}
        className={props.className}
      />
    </React.Fragment>
  );
};

export default UnruledInput;
