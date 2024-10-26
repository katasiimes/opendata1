import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import ProductForm from '../components/ProductForm'
import OrderInfo from '../components/OrderInfo'

const Page = () => {
  const products = ['Product 1 (245€)', 'Product 2 (350€)']
  const prices = [245, 350]

  const [selectedProduct, setSelectedProduct] = useState(0);
  const [qty, setQty] = useState(1)

  const handleProductChange = (index) => {
    setSelectedProduct(index)
  }

  const handleQtyChange = (newQty) => {
    setQty(newQty)
  }

  return (
    <div className="main-ui">
      <Header title="Welcome to product Page!" />

      <ProductForm
        products={products}
        prices={prices}
        onProductChange={handleProductChange}
        onQtyChange={handleQtyChange}
      />

      <OrderInfo
        productName={products[selectedProduct]}
        price={prices[selectedProduct]}
        qty={qty}
      />
    </div>
  )
}

export default Page