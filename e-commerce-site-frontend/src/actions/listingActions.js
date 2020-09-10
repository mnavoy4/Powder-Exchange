import axios from 'axios'
import { LISTINGS_REQUEST,
        LISTINGS_SUCCESS,
        LISTINGS_FAIL,
        LISTING_DETAILS_REQUEST,
        LISTING_DETAILS_SUCCESS,
        LISTING_DETAILS_FAIL,
        LISTING_SAVE_REQUEST,
        LISTING_SAVE_SUCCESS,
        LISTING_SAVE_FAIL } from "../constants/listingConstants";
const listingsUrl = 'http://localhost:5000/listings';

const listListings = () => async (dispatch) => {
  try {
    dispatch({ type: LISTINGS_REQUEST });
    const { data } = await axios.get(listingsUrl);
    dispatch({ type: LISTINGS_SUCCESS, payload: data })
  }
  catch(error){
    dispatch({ type: LISTINGS_FAIL, payload: error.message })
  }
}

const detailsListing = (listingId) => async (dispatch) => {
  try {
    dispatch({ type: LISTING_DETAILS_REQUEST, payload: listingId});
    const { data } = await axios.get(`${listingsUrl}/${listingId}`);
    dispatch({ type: LISTING_DETAILS_SUCCESS, payload: data});
  }
  catch(error) {
    dispatch({ type: LISTING_DETAILS_FAIL, payload: error.message });
  }
}

const saveListing = (listing) => async (dispatch, getState) => {
  try {
    dispatch({ type: LISTING_SAVE_REQUEST, payload: listing });
    const { userSignIn: { userInfo } } = getState();
    const { data } = await axios.post(listingsUrl, listing, {
      headers: {
        'Authorization' : 'Bearer' + userInfo.token
      }
    });
    dispatch({ type: LISTING_SAVE_SUCCESS, payload: data })
  } catch(error) {
    dispatch({ type: LISTING_SAVE_FAIL, payload: error.message })
  };
}

export { listListings, detailsListing, saveListing }