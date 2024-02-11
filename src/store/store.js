import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "./apiSlice";
import categoriesReducer from './categoriesSlice';


export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});
