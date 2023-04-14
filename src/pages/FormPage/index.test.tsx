import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';

import FormPage from '.';

describe('FormPage', () => {
  it('render input name placeHolder text', () => {
    render(
      <Provider store={store}>
        <FormPage className="test" />
      </Provider>
    );
    expect(screen.getByPlaceholderText('input name')).toBeInTheDocument();
  });
  it('render fields of card', () => {
    render(
      <Provider store={store}>
        <FormPage className="test" />
      </Provider>
    );
    expect(screen.getByText('Do you like animals:')).toBeInTheDocument();
    expect(screen.getByText('Select gender:')).toBeInTheDocument();
    expect(screen.getByText('Date of birth:')).toBeInTheDocument();
  });
  it('render button and heading', () => {
    render(
      <Provider store={store}>
        <FormPage className="test" />
      </Provider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(6);
  });
  it('element: exist in the DOM', () => {
    render(
      <Provider store={store}>
        <FormPage className="test" />
      </Provider>
    );
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getAllByRole('radio')).toHaveLength(2);
    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  });
  it('render checkbox', () => {
    render(
      <Provider store={store}>
        <FormPage className="test" />
      </Provider>
    );
    expect(screen.getByRole('checkbox')).toHaveAttribute('name', 'check');
  });
});
