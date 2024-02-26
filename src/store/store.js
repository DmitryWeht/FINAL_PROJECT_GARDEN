import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appApi } from "./apiSlice";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";
import likedProductsReducer from "./likedProductsSlice";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [appApi.reducerPath]: appApi.reducer,
    filter: filterReducer,
    cart: cartReducer,
    likedProducts: likedProductsReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

export const persistor = persistStore(store);
