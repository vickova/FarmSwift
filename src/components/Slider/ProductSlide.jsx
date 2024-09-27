import React from 'react';
import Slider from 'react-slick';
import BasketFood from '../../assets/images/gallery6.jpeg';
import Vegies from '../../assets/images/Vegies.png';
import LadyHarvest from '../../assets/images/ladyHarvest.png';
import FruitBasket from '../../assets/images/Fruits2.png';
import CartonFruit from '../../assets/images/carton-fruits.png';
import './ProductSlide.css'

const ProductSlide = () => {
    const picture__slides = [
        {
            image:CartonFruit
        },
        {
            image:LadyHarvest
        },
        {
            image:BasketFood
        },
        {
            image:FruitBasket
        },
    ]
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:4000,
        slidesToShow:1,
        arrows:false,
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
    <Slider {...settings} className='slide d-flex align-items-end'>
        { picture__slides.map((item, index)=>{
        return <div key={index} className="testimonial py-4 px-3 d-flex align-items-center">
            <img src={item.image} alt="" />
        </div>
        })}
    </Slider>
  )
}

export default ProductSlide