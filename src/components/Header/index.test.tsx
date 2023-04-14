import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '.';

describe('Header', () => {
  it('render logo text', () => {
    render(<Header name="RoboWorld" />, { wrapper: BrowserRouter });

    expect(screen.getByText('RoboWorld')).toBeInTheDocument();
  });
  it('links on page', () => {
    render(<Header name="RoboWorld" />, { wrapper: BrowserRouter });
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
