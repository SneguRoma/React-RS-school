import React, { Component } from 'react';
import './index.css';

export type ICardOfForm = {
  name: string;
  date: string;
  animal: string;
  gender: string;
  image: string;
};

class CardOfForm extends Component<ICardOfForm> {
  render() {
    const user = this.props;
    return (
      <div className="card-of-form">
        <img src={user.image} alt="foto" className="form-card_foto" />
        <h3 className="name_user">{`Name:  ${user.name}`}</h3>
        <h4>Date of birth: {user.date}</h4>
        <h4>Gender: {user.gender}</h4>
        <h4> Animal: {user.animal}</h4>
      </div>
    );
  }
}

export default CardOfForm;
