import './index.css';

type ICard = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phone: string;
  image: string;
};

const Card = (props: ICard) => {
  return (
    <div className="card">
      <img src={props.image} alt="foto" className="user_foto" />
      <h2 className="name_user">{`Name:  ${props.firstName}  ${props.lastName}`}</h2>
      <p>phone: {props.phone}</p>
      <p>
        gender: {props.gender} age:{props.age}{' '}
      </p>
    </div>
  );
};

export default Card;
