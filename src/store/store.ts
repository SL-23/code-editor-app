import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { PAUSE, PURGE, REGISTER, PERSIST, REHYDRATE, FLUSH } from "redux-persist/es/constants";
import persistStore from "redux-persist/es/persistStore";
import persistedReducer from "./persistConfig";

const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ignoredActions
      }
    })
});

export const persistor = persistStore(store);

export default store;