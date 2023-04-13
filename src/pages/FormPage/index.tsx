import CardOfForm from '../../components/CardOfForm';
import Form from '../../components/Form';
import { useAppSelector } from '../../store/hooks';
import './index.css';

type IFormProps = {
  className: string;
};

const FormPage = (props: IFormProps) => {
  const cards = useAppSelector((state) => state.form);

  return (
    <div className={props.className}>
      <Form className="form" />
      <div className="cards-form-list">
        {cards.map((animal, index) => (
          <CardOfForm {...animal} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
