import { combineReducers } from "redux";
import { darkModeReducer } from "./slides/dark-mode/darkMode";

const rootReducer = combineReducers({
  darkMode: darkModeReducer
})

export default rootReducer;