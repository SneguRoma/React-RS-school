import './index.css';
import { ICardFetch } from '../../api';

type ICardFetchCard = {
  id: number;
  firstName: string;
  lastName: string;
  eyeColor: string;
  gender: string;
  username: string;
  email: string;
  image: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const FetchCard = (props: ICardFetchCard) => {
  return (
    <div className="card" onClick={props.onClick}>
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
