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
    expect(screen.getByText('Do you like animals:')).toBeInTheDocument();
    expect(screen.getByText('Select gender:')).toBeInTheDocument();
    expect(screen.getByText('Date of birth:')).toBeInTheDocument();
  });
  it('render button and heading', () => {
    render(<FormPage className="test" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(6);
  });
  it('element: exist in the DOM', () => {
    render(<FormPage className="test" />);
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getAllByRole('radio')).toHaveLength(2);
    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  });
  it('render checkbox', () => {
    render(<FormPage className="test" />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('name', 'check');
  });
});
