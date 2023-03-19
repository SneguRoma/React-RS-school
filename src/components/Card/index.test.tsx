import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from '.';
import USERS from '../../data';

const user = USERS[0];

describe('Card', () => {
  it('render name of card text', () => {
    render(
      <Card
        key={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        age={user.age}
        phone={user.phone}
        gender={user.gender}
        image={user.image}
      />
    );

    expect(screen.getByText('Name: Terry Medhurst')).toBeInTheDocument();
    expect(screen.getByText('phone: +63 791 675 8914')).toBeInTheDocument();
    expect(screen.getByText('gender: male age:50')).toBeInTheDocument();
  });
});
