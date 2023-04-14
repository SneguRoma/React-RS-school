import { type Mock, describe, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { setSearch } from '../../store/searchSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

import InputForm from '.';

describe('Search test', () => {
  vi.mock('../../store/hooks');

  it('checked search value after submit', () => {
    const mockDispatch = vi.fn();
    (useAppSelector as Mock).mockReturnValue('');
    (useAppDispatch as Mock).mockReturnValue(mockDispatch);

    render(
      <Provider store={store}>
        <InputForm className={''} />
      </Provider>
    );

    fireEvent.submit(screen.getByPlaceholderText<HTMLInputElement>('input search'));
    expect(mockDispatch).toHaveBeenCalledWith(setSearch({ search: '' }));
  });

  it('checked click button', async () => {
    const mockDispatch = vi.fn();
    (useAppSelector as Mock).mockReturnValue('');
    (useAppDispatch as Mock).mockReturnValue(mockDispatch);
    render(
      <Provider store={store}>
        <InputForm className={''} />
      </Provider>
    );
    const form = screen.getByRole('button');
    await userEvent.click(form);
    expect(mockDispatch).toHaveBeenCalledWith(setSearch({ search: '' }));
  });
});
