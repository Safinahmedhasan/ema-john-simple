import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './oder.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Oders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemovedFromCart = (id) => {
        const remaning = cart.filter(product => product.id !== id);
        setCart(remaning);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemovedFromCart={handleRemovedFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}>
                        <div>From Oders</div>
                </Cart>
            </div>
        </div>
    );
};

export default Oders;