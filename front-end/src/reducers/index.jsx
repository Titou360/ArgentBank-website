import { combineReducers } from "redux";
import userReducer from "./user.reducer";



const rootReducer = combineReducers ({
    //REDUCERS
    userReducer,

});

export default rootReducer;