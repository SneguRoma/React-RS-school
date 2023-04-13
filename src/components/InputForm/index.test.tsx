import { describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputForm from '.';

describe('Search test', () => {
  const testText = '123';
  const onChangeInput = vi.fn();
  const onClickBut = vi.fn();

  it('checked localstorage save', async () => {
    const { unmount } = render(
      <InputForm className={''} setSearch={() => onChangeInput} click={true} setClick={() => {}} />
    );
    let search = screen.getByPlaceholderText<HTMLInputElement>('input search');
    await userEvent.type(search, testText);
    unmount();
    expect(localStorage.getItem('searchField')).toBe(testText);
    render(<InputForm className={''} setSearch={onChangeInput} click={true} setClick={() => {}} />);
    search = screen.getByPlaceholderText<HTMLInputElement>('input search');
    expect(search.value).toBe(testText);
  });
  it('checked click button', async () => {
    render(
      <InputForm className={''} setSearch={onChangeInput} click={true} setClick={onClickBut} />
    );
    const form = screen.getByRole('button');
    await userEvent.click(form);
    expect(onChangeInput).toBeCalled();
    expect(onClickBut).toBeCalled();
  });
});
