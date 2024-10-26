import React, { useState } from 'react'

const ProductForm = (props) => {
    const [selectedProduct, setSelectedProduct] = useState(0)
    const [qty, setQty] = useState(1)

    const handleProductChange = (e) => {
        const index = parseInt(e.target.value)
        setSelectedProduct(index)
        props.onProductChange(index)
    }

    const increaseQty = () => {
        const newQty = qty + 1
        setQty(newQty)
        props.onQtyChange(newQty)
    }

    const decreaseQty = () => {
        if (qty > 1) {
            const newQty = qty - 1
            setQty(newQty)
            props.onQtyChange(newQty)
        }
    }

    return (
        <div className="form">
            <label>Product: </label>
            <select value={selectedProduct} onChange={handleProductChange}>
                {props.products.map((product, index) => (
                    <option key={index} value={index}>
                        {product}
                    </option>
                ))}
            </select>

            <div className="qty-controls">
                <label>Quantity: </label>
                <button onClick={decreaseQty}>-</button>
                <span>{qty}</span>
                <button onClick={increaseQty}>+</button>
            </div>

            <h2 className="order-title">Order Info</h2>

        </div>
    )
}

export default ProductForm