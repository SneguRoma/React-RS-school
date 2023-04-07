import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import USERS from '../../data';

import Card from '.';

import { ICardFetch } from '../../api';

const user: ICardFetch = USERS[0];

describe('Card loading', () => {
  it('render null card', () => {
    render(<Card activeCard={true} setActiveCard={() => {}} user={null} setIdCard={() => {}} />);
    expect(screen.getByText('....Loading')).toBeInTheDocument();
  });
});

describe('Card enabled', () => {
  it('card terry', () => {
    render(<Card activeCard={true} setActiveCard={() => {}} user={user} setIdCard={() => {}} />);
    expect(screen.getByText('Name: Terry Medhurst')).toBeInTheDocument();
  });
});
