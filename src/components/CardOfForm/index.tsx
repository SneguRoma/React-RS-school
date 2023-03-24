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
        <h3>Date of birth: {user.date}</h3>
        <h3>
          Gender: {user.gender} Colors: {user.color} Animal: {user.animal}
        </h3>
      </div>
    );
  }
}

export default CardOfForm;
