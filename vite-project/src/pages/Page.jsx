import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import ProductForm from '../components/ProductForm';
import OrderInfo from '../components/OrderInfo';


const Page = () => {
  const items = ['Item 1', 'Item 2']
  const prices = [245.0, 350.0]

  const [itemIndex, setItemIndex] = useState(0);

  const [count, setCount] = useState(1)

  const handleItemChange = (index) => {
    setItemIndex(index)
  }


  const handleCountChange = (newCount) => {
    setCount(newCount)
  }

  return (
    <div className="main-ui">
      <Header title="Product Page" />

      <ProductForm
        item={items}
        prices={prices}
        onItemChange={handleItemChange}
        onCountChange={handleCountChange}
      />

      <OrderInfo
        itemName={items[itemIndex]}
        price={prices[itemIndex]}
        count={count}
      />
    </div>
  );
};

export default Page;
