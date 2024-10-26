import React from 'react'
import './css/OrderInfo.css'

const OrderInfo = ({ productName, price, qty }) => {
  const totalPrice = price * qty;
  
  return (
    <div className="order-info">
      <div className="column">
        <p>Product</p>
        <div className="divider"></div>
        <p>{productName}</p>
      </div>
      <div className="column">
        <p>Quantity</p>
        <div className="divider"></div>
        <p>{qty}</p>
      </div>
      <div className="column">
        <p>Total</p>
        <div className="divider"></div>
        <p>{totalPrice}€</p>
      </div>
    </div>
  );
};

export default OrderInfo