import { ADD_TO_CART, REMOVE_FROM_CART, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from '../constants/cartConstants';
function cartReducer(state={ cartItems: [], shipping: {}, payment: {} }, action){
  switch(action.type){
    case ADD_TO_CART:
      const item = action.payload;
      const listing = state.cartItems.find(cartItem => cartItem.id == item.id);
      if (listing) {
        return { cartItems: state.cartItems.map(cartItem => cartItem.id == listing.id ? item : cartItem) }
      } else {
        return { cartItems: [...state.cartItems, item] }
      }
    case REMOVE_FROM_CART:
      return { cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload) }
    case CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload }
    case CART_SAVE_PAYMENT:
      return { ...state, payment: action.payload }
    default: 
      return state
  }
}

export { cartReducer }