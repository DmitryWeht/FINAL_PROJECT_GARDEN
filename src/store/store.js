import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});
