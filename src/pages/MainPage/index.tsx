import CardsList from '../../components/CardsList';
import InputForm from '../../components/InputForm';

const MainPage = () => {
  const inputClass = 'search_form';

  return (
    <div>
      <InputForm className={inputClass} />
      <CardsList />
    </div>
  );
};

export default MainPage;
