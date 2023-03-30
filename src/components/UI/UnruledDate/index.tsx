import React, { RefObject } from 'react';
import './index.css';

type InputDateProps = {
  className: string;
  dateRef: RefObject<HTMLInputElement>;
};

const UnruledDate = (props: InputDateProps) => {
  return (
    <div>
      <label htmlFor="date-input">
        {' '}
        <h4> Date of birth:</h4>
      </label>
      <input
        type="date"
        id="date-input"
        placeholder="input date"
        ref={props.dateRef}
        className={props.className}
      />
    </div>
  );
};

export default UnruledDate;
