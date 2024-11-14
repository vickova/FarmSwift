import React from 'react';
import Slider from 'react-slick';
import Carrot from '../../assets/icons/carrot.svg';
import Tomato from '../../assets/icons/tomato.svg';

import './Categories.css'

const CategoriesSlide = () => {
    const category__list = [
        {
            category:'fruits',
            items__left:'6',
            image:Carrot,
            color:'red'
        },
        {
            category:'Veegtables',
            items__left:'6',
            image:Tomato,
            color:'red'
        },
        {
            category:'tubers',
            items__left:'6',
            image:Carrot,
            color:'red'
        },
        {
            category:'fruits',
            items__left:'6',
            image:Tomato,
            color:'red'
        },
        {
            category:'vegetables',
            items__left:'6',
            image:Carrot,
            color:'red'
        },
        {
            category:'vegetables',
            items__left:'6',
            image:Carrot,
            color:'red'
        },
        
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
        <div className='category-wrapper d-flex gap-1 justify-content-between'>
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