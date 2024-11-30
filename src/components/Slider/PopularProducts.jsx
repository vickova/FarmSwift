import React, {useReducer, useState} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './PopularProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import { CartReducer } from '../../redux/IndividualReducers';


const PopularProducts = () => {
    // const [state, dispatch] = useReducer(CartReducer, InitialState);
    const {pathname} = useLocation()
    const popular_products = useSelector((state)=> state?.WishReducer.popular_products);
    const categoryItem = useSelector((state)=> state?.WishReducer.categoryItem);
    const searchItem = useSelector((state)=> state?.WishReducer.searchItem);
    console.log(searchItem)
    const categoryList = popular_products.filter((item)=>item.category === categoryItem.toLowerCase())
    const searchList = popular_products.filter((item)=> item.category === searchItem.toLowerCase()||item.description.toLowerCase().includes(searchItem.toLowerCase())||item.sellername.toLowerCase().includes(searchItem.toLowerCase()))
    console.log(searchList)
    console.log(categoryList)
    
    // console.log('Cart updated:', state.cartList);
    const wishList = useSelector((state)=> state.WishReducer.wishList)
  return (
    <div className='products__wrapper d-flex gap-4'>
      {pathname !== '/search'?
        (categoryItem === 'Browse All Categories'?
        popular_products?.map((item, index)=>{
            return <ProductCard key={item.id} 
            item={item}/>
        }):
        categoryList.map((item, index)=>{
          return <ProductCard key={item.id} 
          item={item}/>
      })
        ):
        (searchList.length !== 0?
        searchList.map((item, index)=>{
          return <ProductCard key={item.id} 
          item={item}/>
      }):
        <h5>Search item does not exist</h5>
      )
      }
    </div>
  )
}

export default PopularProducts