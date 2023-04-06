import USERS from '../../data';
import Card from '../Card';
import './index.css';

const CardsList = () => {
  return (
    <div className="cards">
      {USERS.map((user) => (
        <Card
          key={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          age={user.age}
          phone={user.phone}
          gender={user.gender}
          image={user.image}
        />
      ))}
    </div>
  );
};
export default CardsList;
