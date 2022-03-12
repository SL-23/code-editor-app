import { combineReducers } from "redux";
import { darkModeReducer } from "./slides/darkmode/reducer";

const rootReducer = combineReducers({
  darkMode: darkModeReducer
})

export default rootReducer;