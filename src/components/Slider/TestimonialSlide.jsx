import React from 'react';
import Slider from 'react-slick';
import Carrot from '../../assets/icons/carrot.svg';
import Greyman from '../../assets/images/grey-man.webp';
import LadyHarvest from '../../assets/images/ladyHarvest.png';
import FarmerVicky from '../../assets/images/Farmer-Vicky.png';
import './TestimonialSlide.css'

const TestimonialSlide = () => {
    const settings={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:4000,
        slidesToShow:1,
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
    <div>
    <Slider {...settings} style={{display:'flex'}} className='testimonial-slide'>
        <div className="testimonial-card py-4 px-3">
            <div className='testimonial-text'>
                <p>I am very pleased with the fact that FarmSwift not only serve my needs as a customer, but is also commited to improving the welfare of farmers in Nigeria
                and driving economic growth in the Agricultural sector. This is something that is very important and deserves appreciation
                </p>
            </div>
            <div className='testimonial__footer'>
                <div className='image-cover d-flex align-items-center gap-4 mt-3'>
                    <img src={FarmerVicky} className='w-25 h-25 rounded-2' alt="" />
                    <div className='image-text'>
                        <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                        <p>Lagos Farmer</p>
                    </div>
                </div>
                <div className='carrot'>
                    <img src={Carrot} alt="" />
                </div>
            </div>
        </div>
        <div className="testimonial-card py-4 px-3">
            <div className='testimonial-text'>
                <p>I am very pleased with the fact that FarmSwift not only serve my needs as a customer, but is also commited to improving the welfare of farmers in Nigeria
                and driving economic growth in the Agricultural sector. This is something that is very important and deserves appreciation
                </p>
            </div>
            <div className='testimonial__footer'>
                <div className='image-cover d-flex align-items-center gap-4 mt-3'>
                    <img src={Greyman} className='w-25 h-25 rounded-2' alt="" />
                    <div className='image-text'>
                        <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                        <p>Lagos Farmer</p>
                    </div>
                </div>
                <div className='carrot'>
                    <img src={Carrot} alt="" />
                </div>
            </div>
        </div>
        <div className="testimonial-card py-4 px-3">
            <div className='testimonial-text'>
                <p>I am very pleased with the fact that FarmSwift not only serve my needs as a customer, but is also commited to improving the welfare of farmers in Nigeria
                and driving economic growth in the Agricultural sector. This is something that is very important and deserves appreciation
                </p>
            </div>
            <div className='testimonial__footer'>
                <div className='image-cover d-flex align-items-center gap-4 mt-3'>
                    <img src={FarmerVicky} className='w-25 h-25 rounded-2' alt="" />
                    <div className='image-text'>
                        <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                        <p>Lagos Farmer</p>
                    </div>
                </div>
                <div className='carrot'>
                    <img src={Carrot} alt="" />
                </div>
            </div>
        </div>
    </Slider>
    </div>
  )
}

export default TestimonialSlide