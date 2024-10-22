import React, {useReducer, useState} from 'react';
import './PopularProducts.css';
import { popular_products } from '../../utils/Dataset';
import ProductCard from '../ProductCard/ProductCard';
import { CartReducer } from '../../redux/IndividualReducers';


const PopularProducts = () => {
    // const [state, dispatch] = useReducer(CartReducer, InitialState);
    // console.log('Cart updated:', state.cartList);
  return (
    <div className='products__wrapper d-flex gap-4 justify-content-center'>
        {
        popular_products.map((item, index)=>{
            return <ProductCard key={item.id} 
            item={item}/>
        })
        
        }
    </div>
  )
}

export default PopularProducts