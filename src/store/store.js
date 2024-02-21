import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "./apiSlice";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    filter: filterReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});
