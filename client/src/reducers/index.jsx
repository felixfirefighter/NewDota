import { combineReducers } from "redux";
import teamReducer from "./teamReducer";
import matchReducer from "./matchReducer";

export default combineReducers({
  teams: teamReducer,
  matches: matchReducer
});
