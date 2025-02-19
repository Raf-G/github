import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  globalReducer: globalReducer,
  profileReducer: profileReducer,
});

export default rootReducer;
