import CardsList from '../../components/CardsList';
import InputForm from '../../components/InputForm';
import { useState } from 'react';

const MainPage = () => {
  const inputClass = 'search_form';
  const [click, setClick] = useState(true);

  return (
    <div>
      <InputForm className={inputClass} click={click} setClick={setClick} />
      <CardsList click={click} />
    </div>
  );
};

export default MainPage;
