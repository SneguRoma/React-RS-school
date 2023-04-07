import './index.css';

type ICardFetchCard = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  image: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const FetchCard = (props: ICardFetchCard) => {
  return (
    <div id={props.id + ''} className="card" onClick={props.onClick}>
      <img src={props.image} alt="foto" className="user_foto" />
      <h2 className="name_user">{`Name:  ${props.firstName}  ${props.lastName}`}</h2>
      <p>NickName: {props.username}</p>
    </div>
  );
};

export default FetchCard;
