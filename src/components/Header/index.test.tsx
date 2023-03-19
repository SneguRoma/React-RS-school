import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from '.';

describe('Header', () => {
  it('render logo text', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header name="RoboWorld" />
      </MemoryRouter>
    );

    expect(screen.getByText('RoboWorld')).toBeInTheDocument();
  });
});
