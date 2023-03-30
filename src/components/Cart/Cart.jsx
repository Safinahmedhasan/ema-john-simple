import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;

    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }
    
    return (
        <div className='cart'>
            <h4 className='oder-summary'>Oder Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: </p>
            <p>tax </p>
            <h6 className='grand-total'>Grand Total: </h6>
        </div>
    );
};

export default Cart;