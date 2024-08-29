import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const randomDogsApi = createApi({
  reducerPath: "dogs",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/" }),
  endpoints: (builder) => ({
    getRandomDog: builder.query<{ message: string }, void>({
      query: () => `breeds/image/random`,
      // Automatic dispatch
    }),
  }),
});

// Se exportan los Hooks autogenerados
export const { useLazyGetRandomDogQuery } = randomDogsApi;
