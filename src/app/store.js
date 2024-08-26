import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import persistReducer from "redux-persist/es/persistReducer";
import { rootReducer } from "../reducx";



const persistConfig = {
  key: "root",
  storage,
  whiteList: ["product", "siteSetting"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
