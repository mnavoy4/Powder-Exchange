import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { listingsReducer, listingDetailsReducer, listingSaveReducer } from './reducers/listingReducers';
import { cartReducer } from './reducers/cartReducers';
import Cookie from 'js-cookie';
import { userSignInReducer, newUserReducer } from './reducers/userReducers';


const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = { cart: { cartItems }, userSignIn: { userInfo } };
const reducer = combineReducers({
  listings: listingsReducer,
  listingDetails: listingDetailsReducer,
  cart: cartReducer,
  userSignIn: userSignInReducer,
  newUser: newUserReducer,
  listingSave: listingSaveReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store