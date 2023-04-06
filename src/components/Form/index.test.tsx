import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Form from '.';

const formRef = '';

describe('FormPage', () => {
  it('element: exist in the DOM', () => {
    render(<Form className="test" setCards={() => formRef} />);
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getAllByRole('radio')).toHaveLength(2);
    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  });
  it('render fields of card', () => {
    render(<Form className="test" setCards={() => formRef} />);
    expect(screen.getByText('Kind of animal:')).toBeInTheDocument();
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Image:')).toBeInTheDocument();
    expect(screen.getByText('Select gender:')).toBeInTheDocument();
    expect(screen.getByText('Date of birth:')).toBeInTheDocument();
  });
  it('render button and heading', () => {
    render(<Form className="test" setCards={() => formRef} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Add card');
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(6);
  });
});
