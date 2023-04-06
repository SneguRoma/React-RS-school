import { FieldValues, UseFormRegister } from 'react-hook-form';
import './index.css';

type IInputProps = {
  class: string;
  register: ReturnType<UseFormRegister<FieldValues>>;
};

const UnruledFileInput = (props: IInputProps) => {
  return (
    <div className="file_input">
      <label htmlFor="file_input">
        <h4> Image: </h4>
      </label>
      <input
        type="file"
        accept="image/jpeg,image/png,image/gif"
        id="image-input"
        {...props.register}
      />
    </div>
  );
};

export default UnruledFileInput;
