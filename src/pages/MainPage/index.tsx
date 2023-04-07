import CardsList from '../../components/CardsList';
import InputForm from '../../components/InputForm';
import { useState } from 'react';

const MainPage = () => {
  const inputClass = 'search_form';
  const [searchField, setSearch] = useState(localStorage.getItem('searchField') ?? '');
  const [click, setClick] = useState(true);

  return (
    <div>
      <InputForm className={inputClass} setSearch={setSearch} click={click} setClick={setClick} />
      <CardsList searchField={searchField} click={click} />
    </div>
  );
};

export default MainPage;
