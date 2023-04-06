import './index.css';
import { ICardFetch } from '../../api';
import { ModuleGraph } from 'vite';

type ICard = {
  activeCard: boolean;
  setActiveCard: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card = (props: ICard) => {
  return (
    <div
      className={props.activeCard ? 'modal-card active' : 'modal-card'}
      onClick={() => props.setActiveCard(false)}
    >
      <div className="modal-card-content" onClick={(e) => e.stopPropagation()}>
        <img src={props.image} alt="foto" className="user_foto" />
        <h2 className="name_user">{`Name:  ${props.firstName}  ${props.lastName}`}</h2>
        <p>nicName: {props.username}</p>
        <p>
          gender: {props.gender} eye: {props.eyeColor}{' '}
        </p>
      </div>
    </div>
  );
};

export default Card;
