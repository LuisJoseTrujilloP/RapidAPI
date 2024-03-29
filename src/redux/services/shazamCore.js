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
      getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
      getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
      getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
      getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
      getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
      getSongsBySearch: builder.query({
        query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
      }),

    })
})
export const {
  
    useGetSongsBySearchQuery,
    useGetTopChartsQuery,
    useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetSongsByGenreQuery,
    useGetSongsByCountryQuery,
    
  } = shazamCoreApi;

  