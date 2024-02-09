import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./apiSlice";
import categoriesReducer from './categoriesSlice';


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
