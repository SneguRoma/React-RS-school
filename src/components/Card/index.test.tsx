import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { testUsers } from '../CardsList/dataTestJson';

const user = testUsers.users[0];

import Card from '.';

describe('Card loading', () => {
  it('render null card', () => {
    render(<Card activeCard={true} setActiveCard={() => {}} user={null} />);
    expect(screen.getByText('....Loading')).toBeInTheDocument();
  });
});

describe('Card enabled', () => {
  it('card terry', () => {
    render(<Card activeCard={true} setActiveCard={() => {}} user={user} />);
    expect(screen.getByText('Name: Terry Medhurst')).toBeInTheDocument();
  });
});
