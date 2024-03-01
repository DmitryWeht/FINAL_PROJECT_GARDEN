import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appApi } from "./apiSlice";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";
import likedProductsReducer from "./likedProductsSlice";
import themeReducer from "./themeSlice";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
  filter: filterReducer,
  cart: cartReducer,
  likedProducts: likedProductsReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["REGISTER"],
        ignoredActionPaths: ["payload.nonSerializable"],
        ignoredPaths: ["some.nested.nonSerializable"],
      },
    }).concat(appApi.middleware),
});

export const persistor = persistStore(store);
