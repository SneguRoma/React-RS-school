import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import FormPage from '.';

describe('FormPage', () => {
  it('render input name placeHolder text', () => {
    render(<FormPage className="test" />);
    expect(screen.getByPlaceholderText('input name')).toBeInTheDocument();
  });
  it('render name of cards text', () => {
    render(<FormPage className="test" />);
    /* expect(screen.getByText('Name: Terry Medhurst')).toBeInTheDocument();
    expect(screen.getByText('phone: +63 791 675 8914')).toBeInTheDocument();
    expect(screen.getByText('gender: male age:50')).toBeInTheDocument(); */
  });
  it('render name of card text', () => {
    render(<FormPage className="test" />);
    //expect(screen.getAllByRole('input')).toHaveLength(9);
    expect(screen.getByRole('button')).toBeInTheDocument();
    //expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(20);
  });
});
