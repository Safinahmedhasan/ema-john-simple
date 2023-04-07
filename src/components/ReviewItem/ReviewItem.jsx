import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemovedFromCart }) => {
    const { id, name, price, quantity, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img className='review-img' src={img} alt="" />
            </div>
            <div className='review-info'>
                <div className='review-left'>
                    <h5 className='review-name'>{name}</h5>
                    <p className='review-price'>Price: ${price}</p>
                    <p className='review-quantity'>Shipping Charge: ${quantity}</p>
                </div>
                    <button onClick={() => handleRemovedFromCart(id)} className='review-button'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>

        </div>
    );
};

export default ReviewItem;