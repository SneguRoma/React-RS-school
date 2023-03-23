import React, { Component } from 'react';
import './index.css';

export type ICardOfForm = {
  name: string;
  date: string;
  animal: string;
  gender: string;
  color: string;
  image: string;
};

class CardOfForm extends Component<ICardOfForm> {
  render() {
    const user = this.props;
    return (
      <div className="card">
        <img src={user.image} alt="foto" className="user_foto" />
        <h2 className="name_user">{`Name:  ${user.name}`}</h2>
        <p>date of birth: {user.date}</p>
        <p>
          gender: {user.gender} color:{user.color} animal {user.animal}
        </p>
      </div>
    );
  }
}

export default CardOfForm;
