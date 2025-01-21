import React from 'react';
import './Reviews.css';
import Customer from '../../assets/images/corn-man.jfif';
import { vendors } from '../../utils/Dataset';
import { useParams } from 'react-router-dom';

const Reviews = () => {
    const {id} = useParams();
    const vendordetail = vendors.filter((item)=> item.id === Number(id));
    const total_rating = 5
      const remaining_rating = total_rating-vendordetail[0]?.rating
  return (
    <div className='reviews'>
        <img src={Customer} alt="Reviwer display picture" />
        <h6>Adeyemi</h6>
        <span className='stars d-flex justify-content-center gap-1'>
                            {
                                [...Array(vendordetail[0]?.rating)]?.map((item, index)=>{
                                    return <i key={index} className="ri-star-fill"></i>
                                })
                            }
                            {
                                [...Array(remaining_rating?remaining_rating:0)]?.map((item, index)=>{
                                    return <i key={index} className="ri-star-line"></i>
                                })
                            }
                            </span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, magnam!</p>
    </div>
  )
}

export default Reviews