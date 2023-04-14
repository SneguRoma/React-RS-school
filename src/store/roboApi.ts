import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Root, IUser } from '../interfaces/interfaces';

export const roboApi = createApi({
  reducerPath: 'roboApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/users/' }),
  endpoints: (build) => ({
    searchRobots: build.query<Root, string>({
      query: (searchField) => `search?q=${searchField}`,
    }),
    getRobot: build.query<IUser, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useSearchRobotsQuery, useGetRobotQuery } = roboApi;
