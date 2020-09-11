import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savePaymentInfo } from '../actions/cartActions';
import CheckoutStatusBar from './CheckoutStatusBar';


export default function Payment(props) {


  const [paymentMethod, setPaymentMethod] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(savePaymentInfo({ paymentMethod }));
    props.history.push('placeorder')
  };

  return (
    <div>
      <CheckoutStatusBar signIn shipping payment></CheckoutStatusBar>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <ul className='form-ul'>
            <li><h3>Payment</h3></li>
            <li>
              <div className='payment-method-radios'>
                  <input
                    name='payment'
                    id='paypal'
                    type='radio'
                    value='paypal'
                    onChange={(event) => setPaymentMethod(event.target.value)}>
                  </input>
                  <label htmlFor='paypal'>Paypal</label>
                <input 
                  name='payment'
                  id='credit-card'
                  type='radio'
                  value='credit card'
                  onChange={(event) => setPaymentMethod(event.target.value)}>
                </input>
                <label htmlFor='credit-card'>Credit Card</label>
              </div>
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