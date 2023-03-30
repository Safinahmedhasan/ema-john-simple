import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;

    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        total = total + product.price;
        totalShipping = + product.shipping;
    };

    const tax = total*7/100;

    const grand = total + totalShipping + tax;
    
    return (
        <div className='cart'>
            <h4 className='oder-summary'>Oder Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>tax ${tax}</p>
            <h6 className='grand-total'>Grand Total: ${grand}</h6>
        </div>
    );
};

export default Cart;