import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "./apiSlice";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";
import likedProductsReducer from './likedProductsSlice';

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    filter: filterReducer,
    cart: cartReducer,
    likedProducts: likedProductsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});
