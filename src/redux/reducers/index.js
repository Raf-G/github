import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import profileReducer from "./profileReducer";
import repositoriesReducer from "./repositoriesReducer";

const rootReducer = combineReducers({
  globalReducer: globalReducer,
  profileReducer: profileReducer,
  repositoriesReducer: repositoriesReducer,
});

export default rootReducer;
