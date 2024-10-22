import React, {useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col} from 'reactstrap';
import { RemoveFromWish } from '../../redux/actions';
import {NavLink, useNavigate} from 'react-router-dom';

import '../Header/Header.css'
import './Toggle.css'

const WishToggle = ({title, icon, superscript}) => {
  const toggleRef = useRef();
    const [toggle, setToggle] = useState(false);
    const wishList = useSelector((state)=> state.WishReducer.wishList)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const ToggleSetter = (e)=>{
      if(e.target.classList.value === 'toggle-children-overlay'){
        setToggle(!toggle);
      }
    }
    const ShopNavigate = ()=>{
        console.log('toggleset')
        setToggle(!toggle)
        navigate('/shop')
        
    }
  return (
    <div className='toggle'>
        <button onClick={()=>setToggle(!toggle)}>
        <i className={icon}></i>
        <span className='superscript'>{superscript}</span>
        <span>{title}</span>
        </button>
        <div className='toggle-children-overlay' style={{display:`${toggle?'block':'none'}`}} onClick={ToggleSetter}>
          <div className='toggle-children' onClick={()=>setToggle(true)} ref={toggleRef}>
          <ul>
            <div className='d-flex align-items-center justify-content-between'>
            <h3>{`Wish List (${wishList.length})`}</h3>
            <i className="ri-close-fill" style={{cursor:'pointer'}} onClick={()=>{
                console.log(toggle);
                return setToggle(!toggle)
            }}></i>
            </div>
            {wishList.length === 0? 
            <div className='no__wish d-flex justify-content-center align-items-center'>
                <div>
                    <h3 className='d-flex gap-3 align-items-center'><span>No wish item</span><i class="ri-emotion-sad-line"></i></h3>
                    <p>Proceed to the <span><NavLink to='/shop' onClick={ShopNavigate}>shop</NavLink></span> to make your wishes</p>
                </div>
            </div>:
            <Container>
                <div className='cartheading__cover'>
                    <Row>
                        <Col className='cart__heading' lg='6'>Product</Col>
                        <Col className='cart__heading' lg='2'>Price</Col>
                        <Col className='cart__heading' lg='2'></Col>
                        <Col className='cart__heading' lg='1'></Col>
                    </Row>
                </div>
                <div className='cartrow__cover'>
                    {
                        wishList?.map((item)=>{
                            return <Row className='cart__row d-flex align-items-center'>
                                <Col lg='6' className='cart__data'>
                                    <div className='cartproduct d-flex gap-3 align-items-center'>
                                        <div className='cartimage d-flex justify-content-center'>
                                            <img src={item.picture} alt="" />
                                        </div>
                                        <div className='cartproduct__text'>
                                            <h3>{item.description}</h3>
                                            <p>{item.sellername}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg='2' className='cart__data'>{item.price}</Col>
                                <Col lg='2' className='cart__data'><button>Add to Cart</button></Col>
                                <Col lg='1' className='cart__data'><i className="ri-close-fill" onClick={()=>dispatch(RemoveFromWish(item))}></i></Col>
                            </Row>
                        })
                    }
                </div>
            </Container>
        }
        </ul>
          </div>
        </div>
    </div>
  )
}

export default WishToggle