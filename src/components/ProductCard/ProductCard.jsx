import React, { useState } from 'react';
import './ProductCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, AddToWish,RemoveFromWish, WishToggle } from '../../redux/actions';
import { vendors } from '../../utils/Dataset';
import { useParams } from 'react-router-dom';

const ProductCard = ({ item}) => {
  const cartList = useSelector((state)=> state.CartReducer.cartList);
  const wishList = useSelector((state)=> state.WishReducer.wishList);
      const popular_products = useSelector((state)=> state?.WishReducer.popular_products);
  const current_vendor = vendors?.filter((vendor)=>vendor?.id===Number(item?.createdBy))[0];
  const total_rating = 5
  const remaining_rating = total_rating-current_vendor?.rating
 
  const dispatch = useDispatch();
  // Handle adding an item to the cart
  const handleAddToCart = () => {
    dispatch(AddToCart(item));
  };
  const handleWish = ()=>{
    dispatch(AddToWish(item))
    dispatch(WishToggle(item))

  }
  const RemoveWish = ()=>{
    dispatch(WishToggle(item))
    dispatch(RemoveFromWish(item))
  }
// console.log(cartList)
// console.log(wishList)
  return (
    <div className='product__card d-flex justify-content-between'>
      <div className='d-flex justify-content-end'>
        {item?.wish ? (
          <i className="ri-heart-fill" onClick={RemoveWish}></i>
        ) : (
          <i className="ri-heart-line" onClick={handleWish}></i>
        )}
      </div>
      <div className='productcard__image'>
        <img src={item.picture} alt="" />
      </div>
      <div className='productcard__text'>
        <p className='productcard__category'>{item.category}</p>
        <h3>{item.description}</h3>
        <div className='rating gap-2 d-flex align-items-center'>
          <span className='stars d-flex gap-1'>
            {
                    [...Array(current_vendor?.rating)]?.map((item, index)=>{
                        return <i key={index} className="ri-star-fill"></i>
                    })
                }
                {
                    [...Array(remaining_rating?remaining_rating:0)]?.map((item, index)=>{
                        return <i key={index} className="ri-star-line"></i>
                    })
                }
          </span>
          <p>{current_vendor?.rating}</p>
        </div>
        <p className='sellername'>By <span>{`${current_vendor?.name}`}</span></p>
        <div className='shop-price d-flex align-items-end justify-content-between'>
          <p className='price'>#{item.price}/kg</p>
          <button className='d-flex gap-4 align-items-center' onClick={handleAddToCart}>
            <i className="ri-shopping-cart-2-line"></i>
            <p>Add</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;