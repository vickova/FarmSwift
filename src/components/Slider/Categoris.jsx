import React from 'react';
import Slider from 'react-slick';
import Carrot from '../../assets/icons/carrot.svg';
import Tomato from '../../assets/icons/tomato.svg';
import Fruit from '../../assets/images/fruit2.jfif';
import Vegetable from '../../assets/images/vegetable.jfif';
import Livestcok from '../../assets/images/livestock.jfif';
import Cereal from '../../assets/images/cereal.jfif';
import Tuber from '../../assets/images/tuber.jfif';

import './Categories.css'

const CategoriesSlide = () => {
    const category__list = [
        {
            category:'fruits',
            items__left:'6',
            image:Fruit,
            color:'red'
        },
        {
            category:'vegtables',
            items__left:'6',
            image:Vegetable,
            color:'red'
        },
        {
            category:'tubers',
            items__left:'6',
            image:Tuber,
            color:'red'
        },
        {
            category:'cereal',
            items__left:'6',
            image:Cereal,
            color:'red'
        },
        {
            category:'livestock',
            items__left:'6',
            image:Livestcok,
            color:'red'
        }
        
    ]
    const settings={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:4000,
        slidesToShow:6,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite:true,
                    dots:false
                }
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    }
  return (
        <div className='category-wrapper'>
            {
            category__list.map((item, index)=>{
            return <div key={index} className={`categories-card `}>
                <div className='d-flex justify-content-center'>
                <img src={item.image} alt="" />
                </div>
                <div>
                    <h6>{item.category}</h6>
                    <p>{`${item.items__left} left`}</p>
                </div>
                </div>
                })
            }
        </div>
  )
}

export default CategoriesSlide