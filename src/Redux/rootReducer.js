import { combineReducers } from "redux";
import globalReducer from "./Global/reducer";

const rootReducer = combineReducers({
  global: globalReducer
});

export default rootReducer;