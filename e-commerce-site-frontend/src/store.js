import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { listingsReducer, listingDetailsReducer } from './reducers/listingReducers';


const initialState = {};
const reducer = combineReducers({
  listings: listingsReducer,
  listingDetails: listingDetailsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store