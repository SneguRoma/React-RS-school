import { describe, it, Mock, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { testUsers } from './dataTestJson';

import CardsList from '.';

describe('CardsList', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('loader before fetch', () => {
    (fetch as Mock).mockResolvedValue({ json: () => Promise.resolve(testUsers) });
    render(<CardsList searchField={''} click={true} />);
    const loader = screen.getByText('...Loading');
    expect(loader).toBeInTheDocument();
  });
});
