import React, { useState } from 'react';
import './ProductCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, AddToWish,RemoveFromWish, WishToggle } from '../../redux/actions';

const ProductCard = ({ item}) => {
  const cartList = useSelector((state)=> state.CartReducer.cartList);
  const wishList = useSelector((state)=> state.WishReducer.wishList);
  const popular_products = useSelector((state)=> state?.WishReducer.popular_products);
 
  const dispatch = useDispatch();
  // Handle adding an item to the cart
  const handleAddToCart = () => {
    dispatch(AddToCart(item));
    console.log('Cart after addition:', cartList);
  };
  const handleWish = ()=>{
    dispatch(AddToWish(item))
    dispatch(WishToggle(item))
    console.log(popular_products)

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
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </span>
          <p>{item.rating}</p>
        </div>
        <p className='sellername'>By <span>{`${item.sellername}`}</span></p>
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