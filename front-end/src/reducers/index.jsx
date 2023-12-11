import { combineReducers } from "redux";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  //REDUCERS listing
  userReducer,
});

export default rootReducer;
