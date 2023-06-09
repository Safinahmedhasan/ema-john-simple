import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan , faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
    const [products , setProducts] = useState([])
    const [cart , setCart] = useState([])

     useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
     }, [])

     useEffect( () => { 
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)

            if (addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
            // console.log('added product', addedProduct)ff
        }
        setCart(savedCart);

    },[products])

     const handleAddToCart = (product) =>{
        // const newCart = [...cart, product]
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        toast.success('added to Cart ❤️')
        if(!exists){
            product.quantity = 1;
            newCart = [...cart , product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists ]
        }
        setCart(newCart);
        addToDb(product.id)
    }


    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }


    return (
        <div className='shop-container'>
           <div className="products-container">
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></Product>)
            }
            </div> 
            <div className="cart-container">
               <Cart cart={cart}
               handleClearCart={handleClearCart}>
                <Link to="/Oders"><button className='btn-clear-review'>Review  Order <FontAwesomeIcon icon={faArrowCircleRight} /></button></Link> 
               </Cart>
            </div>
        </div>
    );
};

export default Shop;