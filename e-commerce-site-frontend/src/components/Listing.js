import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsListing } from '../actions/listingActions';

export default function Listing(props) {

  const listingDetails = useSelector(state => state.listingDetails);
  const {listing, loading, error} = listingDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsListing(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const addToCart = () => {
    props.history.push(`/cart/${props.match.params.id}`)
  }

  return (
    <div>
      <div className='back-to-result-link'>
        <Link to='/' >Back to results</Link>
      </div>
      {loading ? <div>Loading...</div> : 
        error ? <div>{error}</div> : 
          (<div className='listing-info'>
            <div className='listing-image'>
              <img src={listing.img_url} alt='listing' />
            </div>
            <div className='listing-specs'>
              <ul>
                <li>
                  <h4>{listing.name}</h4>
                </li>
                <li>{listing.condition}</li>
                <li>
                  Price: <strong>${listing.price}</strong>
                </li>
                <li>
                  Description: 
                  <div>
                    {listing.description}
                  </div>
                </li>
              </ul>
            </div>
            <div className='add-to-cart'>
              <ul>
                <li>Price: ${listing.price}</li>
                <li>Condition: {listing.condition}</li>
                <li className='add-to-cart-button-li'>
                  <button onClick={addToCart} className='add-to-cart-button'>Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>)}
        </div>
  )
}