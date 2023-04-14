import { describe, it, Mock, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useSearchRobotsQuery } from '../../store/roboApi';

import CardsList from '.';

vi.mock('../../store/roboApi');
vi.mock('../../store/hooks');

describe('CardsList', () => {
  beforeEach(() => {
    (useSearchRobotsQuery as Mock).mockReturnValue({ data: { users: [] } });
  });
  afterEach(() => {
    expect(useSearchRobotsQuery).toHaveBeenCalled();
    vi.clearAllMocks();
  });
  it('loader before fetch', () => {
    (useSearchRobotsQuery as Mock).mockReturnValue({ isLoading: true });
    render(<CardsList />);
    const loader = screen.getByText('...Loading');
    expect(loader).toBeInTheDocument();
  });
  it('robots are not found', () => {
    render(<CardsList />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /...ohohoho Nothing found/i
    );
  });
});
