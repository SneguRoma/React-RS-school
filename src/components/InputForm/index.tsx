import { ChangeEventHandler, useEffect } from 'react';
import './index.css';

type InputFormType = {
  className: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

let search = localStorage.getItem('searchField') ?? '';

const InputForm = (props: InputFormType) => {
  const go = 'Go';

  useEffect(() => {
    return () => {
      localStorage.setItem('searchField', search);
    };
  }, []);

  const searchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    search = e.target.value;
  };

  const searchSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    localStorage.setItem('searchField', search);
    props.setSearch(search);
  };

  return (
    <form className="search" onSubmit={searchSubmit}>
      <input
        type="input"
        defaultValue={search}
        placeholder="input search"
        onChange={searchChange}
        name="searchh"
        className={props.className}
      />
      <button /* type="submit" */>{go}</button>
    </form>
  );
};

export default InputForm;
