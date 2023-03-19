import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardsList from '.';

describe('CardsList', () => {
  it('render name of cards text', () => {
    render(<CardsList />);
    expect(screen.getByText('Name: Terry Medhurst')).toBeInTheDocument();
    expect(screen.getByText('phone: +63 791 675 8914')).toBeInTheDocument();
    expect(screen.getByText('gender: male age:50')).toBeInTheDocument();
  });
  it('render name of card text', () => {
    render(<CardsList />);
    expect(screen.getAllByRole('img')).toHaveLength(20);
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(20);
  });
});
