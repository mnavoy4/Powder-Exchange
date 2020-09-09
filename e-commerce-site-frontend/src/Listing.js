import React from 'react';
import data from './data';
import { Link } from 'react-router-dom';

export default function Listing(props) {
  const listing = data.listings.find(listing => {
    return listing.id == props.match.params.id
  });
  return (
    <div>
      <div className='back-to-result-link'>
        <Link to='/' >Back to results</Link>
      </div>
      <div className='listing-info'>
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
              <button className='add-to-cart-button'>Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}