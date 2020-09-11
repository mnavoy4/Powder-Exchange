import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listListings } from '../actions/listingActions';

export default function Home(props) {

  const listingList = useSelector(state => state.listings);
  const { listings, loading, error } = listingList;
  const category = props.match.params.id ? props.match.params.id : ''
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listListings(category))
    return () => {
      //
    }
  }, [category]);

  return (
    <div>
      {/* <div className='filter-div'>
        <form className='filter-form'>
          Filter Listings: 
          <select className='filter-select'>
            <option value='all'>Show all</option>
            <option value='ski'>Skis</option>
            <option value='snowboard'>Snowboards</option>
            <option value='jacket'>Jackets</option>
            <option value='pant'>Pants</option>
            <option value='helmet'>Helmets</option>
            <option value='accessory'>Accessories</option>
          </select>
        </form>
      </div> */}
      {loading ? <div>Loading...</div> : 
      error ? <div>{error}</div> : 
      <ul className='listings'>
        {
          listings.map(listing => 
            <li key={listing._id}>
              <div className='listing'>
                <Link to={`/listing/${listing._id}`}>
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
      </ul>}
    </div>

  )
  

}