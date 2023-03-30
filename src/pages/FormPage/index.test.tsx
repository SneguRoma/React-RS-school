import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import FormPage from '.';

describe('FormPage', () => {
  it('render input name placeHolder text', () => {
    render(<FormPage className="test" />);
    expect(screen.getByPlaceholderText('input name')).toBeInTheDocument();
  });
  it('render fields of card', () => {
    render(<FormPage className="test" />);
    expect(screen.getByText('Select colors of animal:')).toBeInTheDocument();
    expect(screen.getByText('Select gender:')).toBeInTheDocument();
    expect(screen.getByText('Date of birth:')).toBeInTheDocument();
  });
  it('render button and heading', () => {
    render(<FormPage className="test" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(6);
  });
});
