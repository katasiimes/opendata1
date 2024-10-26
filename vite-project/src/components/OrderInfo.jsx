import React from 'react'
import './css/OrderInfo.css'

const OrderInfo = (props) => {
    const totalPrice = props.price * props.qty

    return (
        <div className="order-info">
            <div className="column">
                <p>Product</p>
                <div className="divider"></div>
                <p>{props.productName}</p>
            </div>
            <div className="column">
                <p>Quantity</p>
                <div className="divider"></div>
                <p>{props.qty}</p>
            </div>
            <div className="column">
                <p>Total</p>
                <div className="divider"></div>
                <p>{totalPrice}€</p>
            </div>
        </div>
    )
}

export default OrderInfo