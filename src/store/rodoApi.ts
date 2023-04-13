import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Root } from '../interfaces/interfaces';

export const roboApi = createApi({
  reducerPath: 'roboApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/users/' }),
  endpoints: (build) => ({
    searchRobots: build.query<Root, string>({
      query: (searchField) => `search?q=${searchField}`,
    }),
  }),
});

export const { useSearchRobotsQuery } = roboApi;
