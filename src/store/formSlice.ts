import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardOfForm } from '../components/CardOfForm';

const initialState: ICardOfForm[] = [];

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<ICardOfForm>) {
      state.push(action.payload);
    },
  },
});

export const { addCard } = formSlice.actions;
export default formSlice.reducer;
