import './index.css';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import { CloseIcon } from '../UI/CloseIcon';
import { IUser } from '../../interfaces/interfaces';

type ICard = {
  activeCard: boolean;
  setActiveCard: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
};

const Card = (props: ICard) => {
  const user = props.user;
  const handleClick = () => {
    props.setActiveCard(false);
  };

  return (
    <div className={props.activeCard ? 'modal-card active' : 'modal-card'} onClick={handleClick}>
      {user && !props.isLoading ? (
        <div className="modal-card-content" onClick={(e) => e.stopPropagation()}>
          <div className="close_icon" onClick={handleClick}>
            <CloseIcon />
          </div>
          <img src={user.image} alt="foto" className="user_foto" />
          <h2 className="name_user">{`Name:  ${user.firstName}  ${user.lastName}`}</h2>
          <p>NickName: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>
            Gender: {user.gender + ';  '} Eye Color: {user.eyeColor}{' '}
          </p>
        </div>
      ) : !props.error ? (
        <h2 className="loading">....Loading</h2>
      ) : (
        <h2 className="loading">...ohohoho something wrong</h2>
      )}
    </div>
  );
};

export default Card;
