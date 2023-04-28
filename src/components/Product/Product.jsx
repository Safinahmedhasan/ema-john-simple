import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import toast, { Toaster } from 'react-hot-toast';

const Product = (props) => {
    const { img, name, seller, ratings, quantity, price } = props.product;

   const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p className='product-ratings'>Rating: {ratings} starts</p>
            </div>

            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            <Toaster />
        </div>
    );
};

export default Product;