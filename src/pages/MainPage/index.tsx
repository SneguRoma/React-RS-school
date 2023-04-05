import CardsList from '../../components/CardsList';
import InputForm from '../../components/InputForm';
import { useState } from 'react';

const MainPage = () => {
  const inputClass = 'search_form';
  const [searchField, setSearch] = useState('');
  console.log('MainPagesearchField', searchField);

  return (
    <div>
      <InputForm className={inputClass} setSearch={setSearch} />
      <CardsList searchField={searchField} />
    </div>
  );
};

export default MainPage;
