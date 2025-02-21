import React, {useReducer, useState} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './PopularProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import { CartReducer } from '../../redux/IndividualReducers';
import { BASE_URL } from '../../utils/config';
import { vendors } from '../../utils/Dataset';
import { useGet } from '../../hooks/useFetch';

const PopularProducts = () => {
    // const [state, dispatch] = useReducer(CartReducer, InitialState);
    const {pathname} = useLocation()
    // const popular_products = useSelector((state)=> state?.WishReducer.popular_products);
    const { data: popular_products, loading: getProductsLoading, error: getProductsError } = useGet(`${BASE_URL}/products`);
  const { data: AllUsers, loading: LoadingUsers, error: UsersError } = useGet(`${BASE_URL}/users`);
  console.log(AllUsers)
    console.log(popular_products)
    const categoryItem = useSelector((state)=> state?.WishReducer.categoryItem);
    const searchItem = useSelector((state)=> state?.WishReducer.searchItem);
    const categoryList = popular_products?.data.filter((item)=>item?.category === categoryItem.toLowerCase())
    const searchList = popular_products?.data.filter((item) => {
      const vendor = vendors.find((vendor) => vendor?.id === item.createdBy); // Find the matching vendor
      const vendorName = vendor ? vendor.name.toLowerCase() : ''; // Get the vendor's name if it exists
      // Convert `item.rating` and `searchItem` to strings for comparison
        const itemRating = item.rating?.toString() || '';
        const searchRating = searchItem?.toString() || '';
      return (
        item.category === searchItem.toLowerCase() ||
        item.description.toLowerCase().includes(searchItem.toLowerCase()) ||
        vendorName.includes(searchItem.toLowerCase()) // Check if vendor name includes the search item
      );
    });

    
    // console.log('Cart updated:', state.cartList);
    const wishList = useSelector((state)=> state.WishReducer.wishList)
  return (
    <div className='products__wrapper d-flex gap-4'>
      {pathname !== '/search'?
        (categoryItem === 'All Categories'?
        popular_products?.data.map((item, index)=>{
            return <ProductCard key={item.id} AllUsers={AllUsers?.data}
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