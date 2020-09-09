import React from 'react';
import data from './data';
import { Link } from 'react-router-dom';


export default function Home(props) {
  return <ul className='listings'>
      {
        data.listings.map(listing => 
          
            <li>
              <div className='listing'>
                <Link to={`/listings/${listing.id}`}>
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