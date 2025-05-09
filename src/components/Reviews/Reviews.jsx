import React from 'react';
import './Reviews.css';
import Customer from '../../assets/images/corn-man.jfif';
import { useParams } from 'react-router-dom';
import { useGet } from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import { useGetP } from '../../hooks/useApi';

const Reviews = ({review}) => {
    const {id} = useParams();
     const { data: AllUsers, loading: LoadingUsers, isError: UsersError } = useGetP(`${BASE_URL}/users`, ['users']);
    const userDetails = AllUsers?.data.filter((user)=>user._id === review?.reviewer)[0]
      console.log(userDetails)
    const total_rating = 5
      const remaining_rating = total_rating-review?.rating
  return (
    <div className='reviews'>
        <img src={userDetails?.photo} alt="Reviwer display picture" />
        <h6>Adeyemi</h6>
        <span className='stars d-flex justify-content-center gap-1'>
                            {
                                [...Array(review?.rating)]?.map((item, index)=>{
                                    return <i key={index} className="ri-star-fill"></i>
                                })
                            }
                            {
                                [...Array(remaining_rating?remaining_rating:0)]?.map((item, index)=>{
                                    return <i key={index} className="ri-star-line"></i>
                                })
                            }
                            </span>
        <p>{review?.review}</p>
    </div>
  )
}

export default Reviews