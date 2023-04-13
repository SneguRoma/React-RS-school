import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from './searchSlice';
import formSliceReducer from './formSlice';
import { roboApi } from './rodoApi';

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    form: formSliceReducer,
    [roboApi.reducerPath]: roboApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(roboApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
