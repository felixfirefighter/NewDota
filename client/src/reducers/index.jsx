import { combineReducers } from "redux";
import teamReducer from "./teamReducer";
import matchReducer from "./matchReducer";
import heroReducer from "./heroReducer";

export default combineReducers({
  teams: teamReducer,
  matches: matchReducer,
  heroes: heroReducer
});
