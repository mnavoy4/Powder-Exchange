import Axios from 'axios';
import Cookie from 'js-cookie';
import {  USER_SIGNIN_SUCCESS,
          USER_SIGNIN_REQUEST,
          USER_SIGNIN_FAIL,
          USER_NEWUSER_REQUEST, 
          USER_NEWUSER_SUCCESS,
          USER_NEWUSER_FAIL } from '../constants/userConstants';

const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post('/users/signin', { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch(error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

const makeNewUser = (firstName, lastName, email, password) => async (dispatch) => {
  dispatch({ type: USER_NEWUSER_REQUEST, payload: { firstName, lastName, email, password } });
  try {
    const { data } = await Axios.post('/users/newuser', { firstName, lastName, email, password });
    dispatch({ type: USER_NEWUSER_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch(error) {
    dispatch({ type: USER_NEWUSER_FAIL, payload: error.message });
  }
}

export { signIn, makeNewUser }