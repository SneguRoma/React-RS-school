import { useState, useEffect } from 'react';
import { searchUsers, getUserById, ICardFetch } from '../../api';
import FetchCard from '../FetchCard';
import Card from '../Card';
import './index.css';

type ICardList = {
  searchField: string;
  click: boolean;
};

const CardsList = (props: ICardList) => {
  const [cards, setcards] = useState<ICardFetch[]>([]);
  const [err, setErr] = useState('');
  const [activeCard, setActiveCard] = useState(false);
  const [idCard, setIdCard] = useState<ICardFetch | null>(null);

  useEffect(() => {
    setcards([]);
    setErr('');
    searchUsers(props.searchField)
      .then((cards) => {
        setcards(cards);
        if (cards.length === 0) setErr('ohohoho Nothing found ');
        else setErr('');
      })
      .catch((err) => setErr(err.message));
  }, [props.searchField, props.click]);
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    getUserById(e.currentTarget.id).then((card) => setIdCard(card));
    setActiveCard(true);
  };

  return (
    <div className="cards">
      {cards.length === 0 && !err ? <h2>...Loading</h2> : err ?? ''}
      {cards.map((user) => (
        <FetchCard
          id={user.id}
          key={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          username={user.username}
          image={user.image}
          onClick={handleClick}
        />
      ))}
      {
        <Card
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          user={idCard}
          setIdCard={setIdCard}
        />
      }
    </div>
  );
};
export default CardsList;
