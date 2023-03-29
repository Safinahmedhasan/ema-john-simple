import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, quantity, price } = props.product
    console.log(img);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p className='product-ratings'>Rating: {ratings} starts</p>
            </div>

            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;