import './index.css';
import { ICardFetch } from '../../api';
import { CloseIcon } from '../UI/CloseIcon';

type ICard = {
  activeCard: boolean;
  setActiveCard: React.Dispatch<React.SetStateAction<boolean>>;
  user: ICardFetch | null;
  setIdCard: React.Dispatch<React.SetStateAction<ICardFetch | null>>;
};

const Card = (props: ICard) => {
  const user = props.user;
  const handleClick = () => {
    props.setActiveCard(false);
    props.setIdCard(null);
  };

  return (
    <div className={props.activeCard ? 'modal-card active' : 'modal-card'} onClick={handleClick}>
      {user ? (
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
      ) : (
        <h2 className="loading">....Loading</h2>
      )}
    </div>
  );
};

export default Card;
