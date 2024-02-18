import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "./apiSlice";
import categoriesReducer from "./categoriesSlice";
import  productsListReducer from "./productsListSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    categories: categoriesReducer,
    productsList: productsListReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});
