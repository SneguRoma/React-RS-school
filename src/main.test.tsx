import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';

describe('Header', () => {
  it('render logo text', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainPage />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('input search')).toBeInTheDocument();
  });
});
