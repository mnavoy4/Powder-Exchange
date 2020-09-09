import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants';
const listingsUrl = 'http://localhost:5000/listings';

const addToCart = (listingId) => async (dispatch) => {
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
  }
  catch(error) {

  }
}

const removeFromCart = (listingId) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: listingId })
}

export { addToCart, removeFromCart }