import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

interface ISearch {
  search: string;
}

const initialState: ISearch = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state: { search: string }, action: PayloadAction<string>) {
      //console.log(state);
      //console.log(action);
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
export const searchState = (state: RootState) => state.search;
