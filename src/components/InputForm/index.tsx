import { ChangeEventHandler, useEffect } from 'react';
import './index.css';

type InputFormType = {
  className: string;
};

let search = '';

const InputForm = (props: InputFormType) => {
  const go = 'Go';

  useEffect(() => {
    return () => {
      localStorage.setItem('searchField', search);
    };
  });

  const searchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    search = e.target.value;
  };

  return (
    <form className="search">
      <input
        type="input"
        defaultValue={search}
        placeholder="input search"
        onChange={searchChange}
        className={props.className}
      />
      <button type="submit">{go}</button>
    </form>
  );
};

export default InputForm;
