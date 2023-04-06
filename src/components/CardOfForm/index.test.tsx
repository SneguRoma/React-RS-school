import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardOfForm from '.';

describe('CardOfForm', () => {
  it('render name of cards text', () => {
    render(<CardOfForm name="King" date="27-05-2023" animal="cat" gender="female" image="" />);
    expect(screen.getByText('Name: King')).toBeInTheDocument();
    expect(screen.getByText('Gender: female')).toBeInTheDocument();
    expect(screen.getByText('Animal: cat')).toBeInTheDocument();
  });
  it('render name of card text', () => {
    render(<CardOfForm name="King" date="27-05-2023" animal="cat" gender="female" image="" />);
    expect(screen.getAllByRole('img')).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(3);
  });
});
