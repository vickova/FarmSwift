import React, { useState, useEffect } from 'react';
import './ProductCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromWish, SignUser, WishToggle } from '../../redux/actions';
import { vendors } from '../../utils/Dataset';
import { useNavigate } from 'react-router-dom';
import calculateAvgRating from '../../components/RatingContent/AvgRating';
import { useGet } from '../../hooks/useFetch';
import { usePost, useDelete } from '../../hooks/useApi';
import { useGetP } from '../../hooks/useApi';
import { BASE_URL } from '../../utils/config';
import Loader from '../Loader/Loader';

const ProductCard = ({ item, AllUsers }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = JSON.parse(localStorage.getItem('user'));
  // console.log({"userDataaaaaaaa": userData})
  const current_vendor = vendors?.find((vendor) => vendor?.id === Number(item?.createdBy));
  const productId = item._id;
  const userId = userData?._id;

// if(!userData){
//   navigate('login')
// }
  // API calls
  const addtoCartData = usePost(`/carts/${productId}`, ['carts', productId]);
  const addtoWishData = usePost(`/wishes/${productId}`, ['wishes', productId]);
  const deleteWishData = useDelete(`/wishes/${productId}`, productId);
  // const { data: AllWishesItems, loading: LoadingWishesItems } = useGet(`${BASE_URL}/wishes/${userData?._id}`);
  const { data: AllWishesItems, isLoading: LoadingWishesItems } = useGetP(`/wishes/${userId}`, ['wishes', userId]);
  const wishList = AllWishesItems?.data
  const SellerData = AllUsers?.find((user) => user._id === item.createdBy);
  const { avgRating } = calculateAvgRating(SellerData?.reviews);
  const validAvgRating = isNaN(avgRating) ? 0 : Math.round(avgRating);
  const total_rating = 5;
  const remaining_rating = total_rating - validAvgRating;



  const isWishlisted = wishList?.some((wish) => wish?.product?._id === item?._id);

  // Handle adding an item to the cart
  const handleAddToCart = () => {
    if (userData?.isVerified) {
      addtoCartData.mutate({})

    } else {
      console.log('Please login');
      return navigate('/login');
    }
  };

  // Handle wishlist actions
  const handleWish = () => {
    if (!userData?.isVerified) {
      console.log('Please login');
      return navigate('/login');
    }
    addtoWishData.mutate({})
  };

  const RemoveWish = () => {
    if (!userData?.isVerified) {
      console.log('Please login');
      return navigate('/login');
    }
    deleteWishData.mutate({})
  };

  return (
    <div className='product__card d-flex justify-content-between'>
      <div className='d-flex justify-content-end'>
        {isWishlisted ? (

          <button disabled={userData?.role === 'seller'} onClick={RemoveWish}>
            <p>{!addtoWishData.isPending ? <i className="ri-heart-fill"></i> : <Loader/>}</p>
          </button>
        ) : (
          <button disabled={userData?.role === 'seller'} onClick={handleWish}>
            <p>{!addtoWishData.isPending ? <i className="ri-heart-line"></i> : <Loader/>}</p>
          </button>
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
            {[...Array(validAvgRating)].map((_, index) => (
              <i key={index} className="ri-star-fill"></i>
            ))}
            {[...Array(remaining_rating || 0)].map((_, index) => (
              <i key={index} className="ri-star-line"></i>
            ))}
          </span>
          <p>{current_vendor?.rating}</p>
        </div>
        <p className='sellername'>
          By <span onClick={() => navigate(`/vendors/${SellerData?._id}`)}>{SellerData?.username}</span>
        </p>
        <div className='shop-price d-flex align-items-end justify-content-between'>
          <p className='price'>#{item.price}/kg</p>
          <button className='d-flex gap-4 align-items-center' disabled={userData?.role === 'seller'} onClick={handleAddToCart}>
            <i className="ri-shopping-cart-2-line"></i>
            <p>{!addtoCartData.isPending ? 'Add' : <Loader/>}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
