import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import ProductForm from '../components/ProductForm';
import OrderInfo from '../components/OrderInfo';


const Page = () => {
  const products = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 20.49 },
    { name: 'Product 3', price: 5.99 },
  ];

  const [order, setOrder] = useState(null);

  const handleOrder = (newOrder) => {
    setOrder(newOrder);
  };

  return (
    <div className="App">
      <Header image={productImage} title="My Product Page" />
      <ProductForm products={products} onOrder={handleOrder} />
      <OrderInfo order={order} />
    </div>
  );
};

export default Page;
