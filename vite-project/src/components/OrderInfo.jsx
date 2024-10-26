import React from 'react';

const OrderInfo = ({ productName, price, qty }) => {
  const totalPrice = price * qty;

  return (
    <div className="order-info">
      <p>Product: {productName}</p>
      <p>Price: {price}</p>
      <p>Quantity: {qty}</p>
      <p>Total: {totalPrice}</p>
    </div>
  );
};

export default OrderInfo;