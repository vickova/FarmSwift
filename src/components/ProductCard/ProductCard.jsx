import React, {useState} from 'react';
import './ProductCard.css'

const ProductCard = ({item}) => {
    const [wish, setWish] = useState(false);
  return (
    <div className='product__card d-flex justify-content-between'>
        <div className='d-flex justify-content-end'>
        { wish?
        <i class="ri-heart-fill" onClick={()=> setWish(!wish)}></i>:
        <i class="ri-heart-line" onClick={()=> setWish(!wish)}></i>
        }
        </div>
        <div className='productcard__image'>
            <img src={item.picture} alt="" />
        </div>
        <div className='productcard__text'>
            <p className='productcard__category'>{item.category}</p>
            <h3>{item.description}</h3>
            <div className='rating gap-2 d-flex align-items-center'>
                <span className='stars d-flex gap-1'>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-fill"></i>
                </span>
                <p>{item.rating}</p>
            </div>
            <p className='sellername'>By <span>{`${item.sellername}`}</span></p>
            <div className='shop-price d-flex align-items-end justify-content-between'>
                <p className='price'>{item.price}</p>
                <button className='d-flex gap-4 align-items-center'>
                    <i className="ri-shopping-cart-2-line"></i>
                    <p>Add</p>
                </button>
            </div>

        </div>
    </div>
  )
}

export default ProductCard