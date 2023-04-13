import { ChangeEventHandler, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

import './index.css';
import { setSearch } from '../../store/searchSlice';

type InputFormType = {
  className: string;
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
};

let search = '';

const InputForm = (props: InputFormType) => {
  const go = 'Go';
  const dispatch = useAppDispatch();

  search = useAppSelector((state) => state.search.search);
  console.log(search);
  useEffect(() => {
    return () => {
      dispatch(setSearch({ search }));
    };
  });

  const searchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    search = e.target.value;
  };

  const searchSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(setSearch({ search }));
    props.setClick(!props.click);
  };

  return (
    <form className="search" onSubmit={searchSubmit}>
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
