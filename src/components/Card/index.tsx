import React from 'react';

type ICard = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phone: string;
  image: string;
};

class Card extends React.PureComponent<ICard> {
  render() {
    const user = this.props;
    return (
      <div className="name">
        <img src={user.image} alt="foto" />
        <h2 className="name_user">{`Name:  ${user.firstName}  ${user.lastName}`}</h2>
        <p>phone: {user.phone}</p>
        <p>
          gender: {user.gender} age:{user.age}{' '}
        </p>
      </div>
    );
  }
}

export default Card;
