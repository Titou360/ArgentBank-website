import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from "../actions/user.action";

// État initial
const initialState = {
  isLoggedIn: false,
  
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        
      };
    default :
    return state;
  }
};

export default userReducer;
