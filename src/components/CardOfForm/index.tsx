import './index.css';

export type ICardOfForm = {
  name: string;
  date: string;
  animal: string;
  gender: string;
  image: string;
};

const CardOfForm = (props: ICardOfForm) => {
  return (
    <div className="card-of-form">
      <img src={props.image} alt="foto" className="form-card_foto" />
      <h3 className="name_user">{`Name:  ${props.name}`}</h3>
      <h4>Date of birth: {props.date}</h4>
      <h4>Gender: {props.gender}</h4>
      <h4> Animal: {props.animal}</h4>
    </div>
  );
};

export default CardOfForm;
