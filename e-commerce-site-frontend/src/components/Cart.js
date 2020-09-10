import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Cart(props) {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const listingId = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    if (listingId) {
      dispatch(addToCart(listingId));
    }
  }, []);

  const handleRemoveFromCart = (listingId) => {
    dispatch(removeFromCart(listingId))
  };

  const goToCheckout = () => {
    props.history.push('signin?redirect=shipping')
  }

  return (
    <div className='cart'>
      <div className='cart-list'>
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
                    <div><button onClick={() => handleRemoveFromCart(cartItem._id)}>Remove from cart</button></div>
                  </div>
                  <div className='cart-item-price'>${cartItem.price}</div>
                </li>
              )})
            }
        </ul>
      </div>
      <div className='cart-action'>
        <h3>Subtotal for {cartItems.length} item(s): ${cartItems.reduce((accumulator, current) => accumulator + current.price, 0)}</h3>
        <button onClick={goToCheckout}
          disabled={cartItems.length === 0}
          className='checkout-button full-width'>
            Go to Checkout
        </button>
      </div>

    </div>
  )
}