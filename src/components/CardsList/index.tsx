import React, { Component } from 'react';
import USERS from '../../data';
import Card from '../Card';

export default class CardsList extends Component {
  users = USERS;

  render() {
    return (
      <div>
        {this.users.map((user) => (
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
  }
}
