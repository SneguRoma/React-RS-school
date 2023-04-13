import CardsList from '../../components/CardsList';
import InputForm from '../../components/InputForm';
import { useAppSelector } from '../../store/hooks';
import { useState } from 'react';

const MainPage = () => {
  const inputClass = 'search_form';
  const [searchField, setSearch] = useState(useAppSelector((state) => state.search.search));
  const [click, setClick] = useState(true);
  console.log('searchField', searchField);

  return (
    <div>
      <InputForm className={inputClass} setSearch={setSearch} click={click} setClick={setClick} />
      <CardsList searchField={searchField} click={click} />
    </div>
  );
};

export default MainPage;
