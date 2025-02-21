import React, { useState } from 'react';
import './ProductCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, AddToWish,RegisterUser,RemoveFromWish, WishToggle } from '../../redux/actions';
import { vendors } from '../../utils/Dataset';
import { useNavigate } from 'react-router-dom';
import calculateAvgRating from '../../components/RatingContent/AvgRating';
import { usePost } from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';


const ProductCard = ({ item, AllUsers}) => {
  const navigate = useNavigate()
  const userData = useSelector((state)=> state.AuthReducer?.user?.data);
  const current_vendor = vendors?.filter((vendor)=>vendor?.id===Number(item?.createdBy))[0];
  const productId = item._id
  const { data: AddtoCartResponse, loading, error, postData } = usePost(`${BASE_URL}/carts/${productId}`);
  console.log(item.createdBy)
  const SellerData = AllUsers?.filter((user)=>user._id === item.createdBy)[0]
  console.log(SellerData)
  const {avgRating, totalRating} = calculateAvgRating(SellerData?.reviews);console.log(avgRating)
  const validAvgRating = isNaN(avgRating) ? 0 : Math.round(avgRating); 

  const total_rating = 5
  const remaining_rating = total_rating-validAvgRating
//  console.log(item)
  const dispatch = useDispatch();
  // Handle adding an item to the cart
  const handleAddToCart = () => {
    if(userData?.isVerified){
      postData({
      }, RegisterUser, '/home');
      console.log(AddtoCartResponse)
    }
    else{
    console.log('Please login')
    console.log(userData?.isVerified)
    return navigate('/login')
    }
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
        <img src={item.photo} alt="" />
      </div>
      <div className='productcard__text'>
        <p className='productcard__category'>{item.category}</p>
        <h3>{item.description}</h3>
        <div className='rating gap-2 d-flex align-items-center'>
        <span className='stars d-flex gap-1'>
        {
            [...Array(validAvgRating)]?.map((item, index)=>{
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
        <p className='sellername'>By <span onClick={()=>navigate(`/vendors/${SellerData?._id}`)}>{`${SellerData?.username}`}</span></p>
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