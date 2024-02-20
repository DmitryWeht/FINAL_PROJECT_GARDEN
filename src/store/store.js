import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "./apiSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});
