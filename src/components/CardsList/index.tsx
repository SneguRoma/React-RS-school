import { useState, useEffect } from 'react';
import { searchUsers, ICardFetch } from '../../api';
import FetchCard from '../FetchCard';
import './index.css';

type ICardList = {
  searchField: string;
};

const CardsList = (props: ICardList) => {
  const [cards, setcards] = useState<ICardFetch[]>([]);
  const [err, setErr] = useState('');

  console.log('CardsListsearchField', props.searchField);

  useEffect(() => {
    searchUsers(props.searchField)
      .then(setcards)
      .catch((err) => setErr(err.message));
  }, [props.searchField]);

  return (
    <div className="cards">
      {cards.length === 0 ? <div>...Loading</div> : err ?? ''}
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
        />
      ))}
    </div>
  );
};
export default CardsList;
