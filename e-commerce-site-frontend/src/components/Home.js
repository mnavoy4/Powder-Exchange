import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listListings } from '../actions/listingActions';
// const listingsUrl = 'http://localhost:5000/listings';

export default function Home(props) {

  const listingList = useSelector(state => state.listings);
  const { listings, loading, error } = listingList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listListings())
    return () => {
      //
    }
  }, []);

  return loading ? <div>Loading...</div> : 
    error ? <div>{error}</div> : 
    <ul className='listings'>
      {
        listings.map(listing => 
            <li key={listing._id}>
              <div className='listing'>
                <Link to={`/listings/${listing._id}`}>
                  <img className='listing-image' src={listing.img_url} alt='listing' />
                </Link>
                <div className='listing-name'>
                  <Link to={`/listings/${listing.id}`}>{listing.name}</Link>
                </div>
                <div className='listing-brand'>{listing.brand}</div>
                <div className='listing-price'>${listing.price}</div>
                <div className='listing-condition'>{listing.condition}</div>
              </div>
            </li>
          )
        }
    </ul>
}