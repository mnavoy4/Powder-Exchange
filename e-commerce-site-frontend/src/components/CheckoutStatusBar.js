import React from 'react';
export default function CheckoutStatusBar(props) {
  return (
    <div className="checkout-steps">
      <div className={props.signIn ? 'active' : ''} >Sign In</div>
      <div className={props.shipping ? 'active' : ''} >Shipping</div>
      <div className={props.payment ? 'active' : ''} >Payment</div>
      <div className={props.placeOrder ? 'active' : ''} >Place Order</div>
    </div>
  )
}

