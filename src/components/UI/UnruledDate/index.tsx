import { FieldValues, UseFormRegister } from 'react-hook-form';
import './index.css';

type InputDateProps = {
  className: string;
  register: ReturnType<UseFormRegister<FieldValues>>;
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
        {...props.register}
        className={props.className}
      />
    </div>
  );
};

export default UnruledDate;
