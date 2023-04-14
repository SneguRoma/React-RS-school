import { useState } from 'react';
import FetchCard from '../FetchCard';
import { useSearchRobotsQuery, useGetRobotQuery } from '../../store/roboApi';
import Card from '../Card';
import { useAppSelector } from '../../store/hooks';

import './index.css';

const CardsList = () => {
  const [activeCard, setActiveCard] = useState(false);
  const searchField = useAppSelector((state) => state.search.search);
  const searchRobots = useSearchRobotsQuery(searchField);
  const [robotId, setRobotId] = useState('1');
  const robot = useGetRobotQuery(robotId);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setRobotId(e.currentTarget.id);
    setActiveCard(true);
  };

  if (searchRobots.isLoading || searchRobots.isFetching) {
    return <h2>...Loading</h2>;
  }

  if (searchRobots.error) {
    return <h2>...ohohoho something wrong</h2>;
  }

  if (searchRobots.data?.users.length === 0 && !searchRobots.error) {
    return <h2>...ohohoho Nothing found</h2>;
  }

  return (
    <div className="cards">
      {searchRobots.data?.users.map((user) => (
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
          isLoading={robot.isLoading || robot.isFetching}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          user={robot.data || null}
          error={robot.error}
        />
      }
    </div>
  );
};
export default CardsList;
