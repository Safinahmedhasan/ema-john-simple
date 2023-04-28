import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan , faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {


    const {cart , handleClearCart, children} = props;

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
         }
        // product,quantity = product.quantity || 1; 
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    };

    const tax = total*7/100;

    const grand = total + totalShipping + tax;
    
    return (
        <div className='cart'>
            <h4 className='oder-summary'>Oder Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>tax ${tax}</p>
            <h6 className='grand-total'>Grand Total: ${grand}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
            {children}
        </div>
        
    );
};

export default Cart;