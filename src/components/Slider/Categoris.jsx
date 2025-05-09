import React from 'react';
import Slider from 'react-slick';
import Carrot from '../../assets/icons/carrot.svg';
import Tomato from '../../assets/icons/tomato.svg';
import Fruit from '../../assets/images/fruit2.jfif';
import Vegetable from '../../assets/images/vegetable.jfif';
import Livestcok from '../../assets/images/livestock.jfif';
import Cereal from '../../assets/images/cereal.jfif';
import Tuber from '../../assets/images/tuber.jfif';
import Poultry from '../../assets/images/hen2.jpg'

import './Categories.css'

const CategoriesSlide = () => {
    const category__list = [
        {
            category:'fruits',
            image:Fruit,
            color:'red'
        },
        {
            category:'vegtables',
            image:Vegetable,
            color:'red'
        },
        {
            category:'tuber',
            image:Tuber,
            color:'red'
        },
        {
            category:'grains',
            image:Cereal,
            color:'red'
        },
        {
            category:'livestock',
            image:Livestcok,
            color:'red'
        },
        {
            category:'Poultry',
            image:Poultry,
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
                    
                </div>
                })
            }
        </div>
  )
}

export default CategoriesSlide