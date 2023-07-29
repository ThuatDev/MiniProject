import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReduce from "./userReduce";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReduce,
});

export default rootReducer;
