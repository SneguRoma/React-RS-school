import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from '.';

import { testUsers } from '../CardsList/dataTestJson';

const user = testUsers.users[0];
const onClickBut = vi.fn();

describe('Card', () => {
  it('render name of card text', () => {
    render(
      <Card
        key={user.id}
        id={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        username={user.username}
        image={user.image}
        onClick={onClickBut}
      />
    );

    expect(screen.getByText('Name: Terry Medhurst')).toBeInTheDocument();
    expect(screen.getByText('NickName: atuny0')).toBeInTheDocument();
  });
});
