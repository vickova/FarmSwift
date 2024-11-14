import React, {useReducer, useState} from 'react';
import { useSelector } from 'react-redux';
import './PopularProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import { CartReducer } from '../../redux/IndividualReducers';


const PopularProducts = () => {
    // const [state, dispatch] = useReducer(CartReducer, InitialState);
    // console.log('Cart updated:', state.cartList);
    const popular_products = useSelector((state)=> state?.WishReducer.popular_products);
    const wishList = useSelector((state)=> state.WishReducer.wishList)
  return (
    <div className='products__wrapper d-flex gap-4 justify-content-between'>
        {
        popular_products?.map((item, index)=>{
            return <ProductCard key={item.id} 
            item={item}/>
        })
        
        }
    </div>
  )
}

export default PopularProducts