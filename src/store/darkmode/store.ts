import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { PAUSE, PURGE, REGISTER ,PERSIST,REHYDRATE,FLUSH  } from "redux-persist/es/constants";
import persistedReducer from "./persistConfig";

const ignoredActions = [FLUSH, REHYDRATE, PAUSE,PERSIST, PURGE, REGISTER];

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions,
    },
    devTools: process.env.NODE_ENV !== "production"
  })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;