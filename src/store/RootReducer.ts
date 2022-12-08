import { combineReducers } from "redux";
import { darkModeReducer } from "./slides/dark-mode/darkMode";
import { filesReducer } from "./slides/files/files";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage
}

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer
})

const persistedReducer = persistReducer(persistConfig, combinedReducers)

export default persistedReducer;