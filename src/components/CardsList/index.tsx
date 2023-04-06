import { useState, useEffect } from 'react';
import { searchUsers, ICardFetch } from '../../api';
import FetchCard from '../FetchCard';
import Card from '../Card';
import './index.css';

type ICardList = {
  searchField: string;
};

const CardsList = (props: ICardList) => {
  const [cards, setcards] = useState<ICardFetch[]>([]);
  const [err, setErr] = useState('');
  const [activeCard, setActiveCard] = useState(true);

  useEffect(() => {
    searchUsers(props.searchField)
      .then((cards) => {
        setcards(cards);
        if (cards.length === 0) setErr('ohohoho Nothing found ');
        else setErr('');
      })
      .catch((err) => setErr(err.message));
  }, [props.searchField]);

  return (
    <div className="cards">
      {cards.length === 0 && !err ? <div>...Loading</div> : err ?? ''}
      {cards.map((user) => (
        <FetchCard
          id={user.id}
          key={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          eyeColor={user.eyeColor}
          email={user.email}
          gender={user.gender}
          username={user.username}
          image={user.image}
          onClick={() => setActiveCard(true)}
        />
      ))}
      <Card activeCard={activeCard} setActiveCard={setActiveCard} />
    </div>
  );
};
export default CardsList;
