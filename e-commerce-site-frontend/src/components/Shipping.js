import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingInfo } from '../actions/cartActions';
import CheckoutStatusBar from './CheckoutStatusBar';


export default function Shipping(props) {


  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [homeState, setHomeState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveShippingInfo({ address, city, homeState, zipcode }));
    props.history.push('payment')
  };

  return (
    <div>
      <CheckoutStatusBar signIn shipping></CheckoutStatusBar>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <ul className='form-ul'>
            <li><h3>Shipping</h3></li>
            <li>
            </li>
            <li>
              <label htmlFor='address'>Street Address</label>
              <input 
                name='address'
                id='address'
                type='text'
                onChange={(event) => setAddress(event.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor='city'>City</label>
              <input 
                name='city'
                id='city'
                type='text'
                onChange={(event) => setCity(event.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor='state'>State</label>
              <input 
                name='state'
                id='state'
                type='text'
                onChange={(event) => setHomeState(event.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor='zipcode'>Zipcode</label>
              <input 
                name='zipcode'
                id='zipcode'
                type='text'
                onChange={(event) => setZipcode(event.target.value)}>
              </input>
            </li>
            <li>
              <button type='submit' className='checkout-button'>Continue</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}