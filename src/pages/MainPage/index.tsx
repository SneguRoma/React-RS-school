import CardsList from '../../components/CardsList';
import InputForm from '../../components/InputForm';

const MainPage = () => {
  const inputClass = 'search_form';

  return (
    <>
      <InputForm className={inputClass} />
      <CardsList />
    </>
  );
};

export default MainPage;
