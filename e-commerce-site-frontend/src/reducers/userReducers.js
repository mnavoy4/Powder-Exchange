import {  USER_SIGNIN_SUCCESS,
          USER_SIGNIN_REQUEST,
          USER_SIGNIN_FAIL,
          USER_NEWUSER_REQUEST, 
          USER_NEWUSER_SUCCESS,
          USER_NEWUSER_FAIL } from '../constants/userConstants';

function userSignInReducer(state={}, action) {
  switch(action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

function newUserReducer(state={}, action) {
  switch(action.type) {
    case USER_NEWUSER_REQUEST:
      return { loading: true };
    case USER_NEWUSER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_NEWUSER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export { userSignInReducer, newUserReducer }