import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';

import MainPage from './pages/MainPage';

describe('Header', () => {
  it('render logo text', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(screen.getByPlaceholderText('input search')).toBeInTheDocument();
  });
});
