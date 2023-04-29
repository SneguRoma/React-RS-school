import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('render error page', () => {
    render(
      <MemoryRouter initialEntries={['/trulala']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'ohhoho something wrong...'
    );
  });
  it('render about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('This page about us');
  });
  it('render logo text', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('RoboWorld');
  });
});
