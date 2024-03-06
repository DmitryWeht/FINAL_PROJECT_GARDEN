import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist"; // Импорт функций и констант из Redux Persist

import storage from "redux-persist/lib/storage";
import { appApi } from "./apiSlice";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";
import likedProductsReducer from "./likedProductsSlice";
import themeReducer from "./themeSlice";
// Конфигурация для Redux Persist
const persistConfig = {
  key: "root", // Ключ, под которым будет храниться состояние в локальном хранилище
  storage, // Используемый тип хранилища (в данном случае, localStorage)
};
// Объединение редукторов с помощью combineReducers
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [appApi.reducerPath]: appApi.reducer,
    filter: filterReducer,
    cart: cartReducer,
    likedProducts: likedProductsReducer,
    theme: themeReducer,
  })
);
// Создание хранилища Redux
export const store = configureStore({
  reducer: persistedReducer, // Передаем объединенный редуктор
  middleware: (getDefaultMiddleware) =>
    // Настройка middleware для Redux Toolkit
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(appApi.middleware),
});

export const persistor = persistStore(store);
