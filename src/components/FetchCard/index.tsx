import './index.css';
import { ICardFetch } from '../../api';

/* type ICard = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phone: string;
  image: string;
}; */

const FetchCard = (props: ICardFetch) => {
  return (
    <div className="card">
      <img src={props.image} alt="foto" className="user_foto" />
      <h2 className="name_user">{`Name:  ${props.firstName}  ${props.lastName}`}</h2>
      <p>nicName: {props.username}</p>
      <p>
        gender: {props.gender} eye: {props.eyeColor}{' '}
      </p>
    </div>
  );
};

export default FetchCard;
