import axios from 'axios';
import Cookie from 'js-cookie';
import { ADD_TO_CART, REMOVE_FROM_CART, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from '../constants/cartConstants';
const listingsUrl = 'http://localhost:5000/listings';

const addToCart = (listingId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${listingsUrl}/${listingId}`);
    dispatch({type: ADD_TO_CART, payload: {
      id: data.id,
      name: data.name,
      category: data.category,
      img_url: data.img_url,
      price: data.price,
      brand: data.brand,
      condition: data.condition,
      description: data.description
    }})
    const {cart:{cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  }
  catch(error) {

  }
}

const removeFromCart = (listingId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: listingId });
  const {cart:{cartItems}} = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
}

const saveShippingInfo = (shipping) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: shipping });
}

const savePaymentInfo = (payment) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT, payload: payment });
}

export { addToCart, removeFromCart, saveShippingInfo, savePaymentInfo }