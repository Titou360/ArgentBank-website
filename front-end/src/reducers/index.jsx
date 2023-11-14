import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import dealReducer from "./deal.reducer"



const rootReducer = combineReducers ({
    //REDUCERS
    userReducer,
    dealReducer,

});

export default rootReducer;