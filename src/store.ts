import { configureStore } from "@reduxjs/toolkit/react";
import { randomDogsApi } from "./services/dog.rtkquery.service";

export const store = configureStore({
  reducer: {
    // El reducer y el path están disponíbles dentro del objeto API
    [randomDogsApi.reducerPath]: randomDogsApi.reducer,
  },
  // el middleware por default incluye las habilidades de:
  // caching, invalidation y polling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(randomDogsApi.middleware),
});
