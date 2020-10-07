import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutStatusBar from './CheckoutStatusBar';

export default function PlaceOrder(props) {
  const cart = useSelector(state => state.cart);
  const { cartItems, shipping, payment } = cart;

  if(!payment.paymentMethod){
    props.history.push('/shipping');
  }

  if(!shipping.address){
    props.history.push('/payment');
  }
  const dispatch = useDispatch();
  useEffect(() => {

  }, []);

  const handlePlaceOrder = () => {
    //create Order
  }

  const roundMoney = (tax) => {
    return Math.ceil(tax * 100) / 100
  }

  const toUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const totalListingsCost = cartItems.reduce((accumulator, current) => accumulator + current.price, 0);
  const shippingCost = 10;
  const taxCost = roundMoney(totalListingsCost * 0.1);
  const totalCost = roundMoney(totalListingsCost + shippingCost + taxCost)


  return (
    <div>
      <CheckoutStatusBar signIn shipping payment placeOrder ></CheckoutStatusBar>
      <div className='place-order'>
        <div className='place-order-info'>
          <div>
            <h3>Shipping</h3>
            <div>
              {cart.shipping.address}
              {' '}
              {cart.shipping.city} {' '}
              {cart.shipping.homeState}, {cart.shipping.zipcode}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>
              Payment Method: {toUpperCase(payment.paymentMethod)}
            </div>
          </div>
          <div>
            <ul className='cart-list-ul'>
              <li> 
                <h3>Shopping Cart</h3>
                <div>Price</div>
              </li>
                {
                  cartItems.length === 0 ? 
                  <div>Your Cart is Empty</div> :
                  cartItems.map(cartItem => {
                    return (<li key={cartItem._id}>
                      <div className='cart-item-img'>
                        <img src={cartItem.img_url} alt='listing' />
                      </div>
                      <div className='cart-item-name'>
                        <div><Link to={`/listings/${cartItem._id}`}>{cartItem.name}</Link></div>
                      </div>
                      <div className='cart-item-price'>${cartItem.price}</div>
                    </li>
                  )})
                }
            </ul>
          </div>
        </div>
        <div className='place-order-action'>
          <ul>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>${totalListingsCost}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>${shippingCost}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>${taxCost}</div>
            </li>
            <li>
              <div>Total</div>
              <div>${totalCost}</div>
            </li>
            <li>
              <button className='checkout-button full-width' onClick={handlePlaceOrder}>Place Order</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}