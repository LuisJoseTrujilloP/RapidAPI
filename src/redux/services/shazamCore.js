import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import playerReducer from '../features/playerSlice';


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', 'f63eb986a4mshea8dc10e87c0929p141094jsn22150bafe9c6');
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
});

export  const {
  useGetTopChartsQuery,
} = shazamCoreApi;
