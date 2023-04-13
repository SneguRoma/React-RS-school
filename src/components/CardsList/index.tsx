import { useState, useEffect } from 'react';
import { searchUsers, getUserById, ICardFetch } from '../../api';
import FetchCard from '../FetchCard';
import { useSearchRobotsQuery } from '../../store/rodoApi';
import Card from '../Card';
import { useAppSelector } from '../../store/hooks';
import './index.css';

type ICardList = {
  click: boolean;
};

const CardsList = (props: ICardList) => {
  const [cards, setcards] = useState<ICardFetch[]>([]);
  const [err, setErr] = useState('');
  const [activeCard, setActiveCard] = useState(false);
  const [idCard, setIdCard] = useState<ICardFetch | null>(null);

  const searchField = useAppSelector((state) => state.search.search);
  const { data, error, isLoading } = useSearchRobotsQuery(searchField);
  console.log(data, error, isLoading);
  //if (data?.users.length === 0) setErr('ohohoho Nothing found ');

  /* useEffect(() => {
    setcards([]);
    setErr('');
    searchUsers(searchField)
      .then((cards) => {
        setcards(cards);
        if (cards.length === 0) setErr('ohohoho Nothing found ');
        else setErr('');
      })
      .catch((err) => setErr(err.message));
  }, [searchField, props.click]); */
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    getUserById(e.currentTarget.id).then((card) => setIdCard(card));
    setActiveCard(true);
  };

  if (isLoading) {
    return <h2>...Loading</h2>;
  }

  return (
    <div className="cards">
      {isLoading /*  && !error  */ ? <h2>...Loading</h2> : err ?? ''}
      {data?.users.map((user) => (
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
