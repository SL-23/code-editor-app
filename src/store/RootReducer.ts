import { combineReducers } from "redux";
import darkModeReducer from "./darkmode/reducer";

const rootReducer = combineReducers({
  darkMode: darkModeReducer
})

export default rootReducer;