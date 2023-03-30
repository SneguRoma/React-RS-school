import React, { ChangeEventHandler, useState, useEffect } from 'react';
import './index.css';

type InputFormType = {
  className: string;
};

type InputFormState = {
  searchField: string;
};

const InputForm = (props: InputFormType) => {
  const go = 'Go';

  const [state, setState] = useState<InputFormState>({
    searchField: localStorage.getItem('searchField') ?? '',
  });

  useEffect(() => {
    return () => {
      localStorage.setItem('searchField', state.searchField);
    };
  });

  const searchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setState({ searchField: e.target.value });
  };

  return (
    <form className="search">
      <input
        type="input"
        placeholder="input search"
        value={state.searchField}
        onChange={searchChange}
        className={props.className}
      />
      <button type="submit">{go}</button>
    </form>
  );
};

export default InputForm;
