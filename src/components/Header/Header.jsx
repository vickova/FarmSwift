import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { AddToCart, ReduceCart, RemoveCart, RemoveFromWish } from '../../redux/actions';
import {NavLink,Link, useLocation, useNavigate} from 'react-router-dom';
import Logo from '../../assets/icons/swift-logo.png';
import Toggle from '../Toggle/Toggle';
import ToggleAccount from '../Toggle/ToggleAccount';
import './Header.css'


const Header = () => {
    const cartList = useSelector((state)=> state.CartReducer.cartList)
    const wishList = useSelector((state)=> state.WishReducer.wishList)
    const headerRef = useRef();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const [menuToggle, setMenuToggle] = useState(false)
    const accountexists = pathname.includes('account')

    const CartIncrement = (item)=>{
        dispatch(AddToCart(item));
        console.log('wished')
        dispatch(RemoveFromWish(item))
        console.log(item)
    }
    const stickyHeaderFunction = ()=>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                headerRef?.current?.classList.add('sticky__header')
            }
            else{
                headerRef?.current?.classList.remove('sticky__header')
            }
        })
    }
    useEffect(()=>{
        stickyHeaderFunction();
        return window.removeEventListener('scroll', stickyHeaderFunction)
      }, [])
    const about__links = [
        {
            path:'/my-account',
            display:'My Account'
        },
        {
            path:'/wishlist',
            display:'WishList'
        },
        {
            path:'/order-tracking',
            display:'Order Tracking'
        }
    ]

const nav__links = [
    {
        path:'/',
        display:"Compare",
        icon: 'ri-recycle-line'
    },
    {
        path:'/home/wishlist',
        display:'Wishlist',
        icon:'ri-heart-line'
    },
    {
        path:'/home/cart',
        display:'Cart',
        icon:'ri-shopping-cart-2-line'
    },
    {
        path:'/',
        display:'Account',
        icon: 'ri-user-3-line'
    }
]
const sub__links = [
    {
        path:'/',
        display:"Home",
    },
    {
        path:'/about',
        display:'About',
    },
    {
        path:'/vendors',
        display:'Vendors',
    },
    {
        path:'/consultation',
        display:'Consultation',
    },
    {
        path:'/contact',
        display:'Contact'
    }
]
const MenuTog= ()=>{
    setMenuToggle(!menuToggle);
    console.log(menuToggle)
}
  return (
    <div ref={headerRef} style={{display:`${pathname==='/register'||pathname==='/checkout'||pathname==='/register/customer'||accountexists||pathname==='/register/seller'||pathname==='/login'?'none':'block'}`}}>
        <Container className='container'>
            <Row >
                <div className="navup__wrapper d-flex align-items-center justify-content-between py-2">
                    <div className="nav__middle">
                        <p className='m-0'>Supper Value Deals - Save more with coupons</p>
                    </div>
                    {/* ======== user access ends======= */}
                    {/* ========language menu starts====== */}
                    <div className="cur-lang align-items-center d-flex justify-content-between gap-2">
                        <div className='align-items-center d-flex gap-2'><p className='help m-0'>Need help? Call us</p> <span className='help-contact'>+2348021585694</span></div>
                        <select name="Language" id="language" disabled="disabled">
                            <option value="English">English</option>
                        </select>
                        <select name="Currency" id="currency" disabled="disabled">
                            <option value="Rupees">INR</option>
                        </select>
                    </div>
                    {/* ========langugae menu ends======== */}
                    
                </div>
            </Row>
            <Row>
                <div className="navdown__wrapper d-flex gap-3 align-items-center justify-content-between py-1">
                    {/* =======logo starts====== */}
                    <div className="logo">
                        <img src={Logo} alt="FarmSwift logo" />
                    </div>
                    {/* =======logo ends======= */}
                    {/* ========search starts====== */}
                    <div className="form-wrapper">
                        <Form className='form d-flex align-items-center'>
                                <input type="text" placeholder='Search for products...' required id='search'/>
                        <Button className='nav__btn'>Search</Button>
                        </Form>
                    </div>
                    {/* ========search ends======== */}
                    {/* ======== user access begins====== */}
                    <div className="nav__right">
                    {/* logout button and username comes here when user login */}
                    <div className="other__btns d-flex gap-4 align-items-center">
                    <Toggle title={'Wishlist'} icon={'ri-heart-line'} superscript={wishList.length}>
                        <ul>
                            <h3>{`Wish List (${wishList.length})`}</h3>
                            {wishList.length === 0? 
                            <div className='no__wish d-flex justify-content-center align-items-center'>
                                <div>
                                    <h3 className='d-flex gap-3 align-items-center'><span>No wish item</span><i className="ri-emotion-sad-line"></i></h3>
                                    <p>Proceed to the <span><NavLink to='/shop'>shop</NavLink></span> to make your wishes</p>
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
                                                <Col lg='2' className='cart__data'><button onClick={()=>CartIncrement(item)}>Add to Cart</button></Col>
                                                <Col lg='1' className='cart__data'><i className="ri-close-fill" onClick={()=>dispatch(RemoveFromWish(item))}></i></Col>
                                            </Row>
                                        })
                                    }
                                </div>
                            </Container>
                        }
                        </ul>
                        </Toggle>
                        <Toggle title={'Cart'} icon={'ri-shopping-cart-2-line'} superscript={cartList.length}>
                        <ul>
                            <h3>{`shopping Cart (${cartList.length})`}</h3>
                            {cartList.length === 0? 
                            <div className='no__wish d-flex justify-content-center align-items-center'>
                                <div>
                                    <h3 className='d-flex gap-3 align-items-center'><span>No item in cart</span><i className="ri-emotion-sad-line"></i></h3>
                                    <p>Proceed to the <span><NavLink to='/shop'>shop</NavLink></span> to add to cart</p>
                                </div>
                            </div>:
                            <Container>
                                <div className='cartheading__cover'>
                                    <Row>
                                        <Col className='cart__heading' lg='4'>Product</Col>
                                        <Col className='cart__heading' lg='2'>Price</Col>
                                        <Col className='cart__heading' lg='3'>Quantity</Col>
                                        <Col className='cart__heading' lg='2'>Total</Col>
                                        <Col className='cart__heading' lg='1'></Col>
                                    </Row>
                                </div>
                                <div className='cartrow__cover'>
                                    {
                                        cartList.map((item)=>{
                                            let totalPrice =item?.price * item?.quantity;

                                            return <Row className='cart__row d-flex align-items-center'>
                                                <Col lg='4' className='cart__data'>
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
                                                <Col lg='3' className='cart__data d-flex justify-content-center gap-3 align-items-center'><button onClick={()=>dispatch(ReduceCart(item))}>-</button><span>{item.quantity}</span><button value={item} onClick={()=>CartIncrement(item)}>+</button></Col>
                                                <Col lg='2' className='cart__data'>#{totalPrice}</Col>
                                                <Col lg='1' className='cart__data'><i className="ri-close-fill" onClick={()=>dispatch(RemoveCart(item))}></i></Col>
                                            </Row>
                                        })
                                    }
                                </div>
                                <Row className='suggestions'>
                                    <Col lg='6'>
                                        <h3>You May Need</h3>

                                    </Col>
                                    <Col lg='6'>
                                        <div className='subtotal d-flex align-items-center justify-content-between'>
                                            <h4>Subtotal</h4>
                                            <p>#{cartList.reduce((acc, item)=>acc+(item?.price * item?.quantity), 0)}</p>
                                        </div>
                                        <div className='my-4'>
                                            <button className='checkout' onClick={()=> navigate('/checkout')}>Check out</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            }
                        </ul>
                        </Toggle>
                        
                        <ToggleAccount title={'Account'} icon={'ri-user-3-line'}>
                            <div className='account-list'>
                                <p><Link to='/account'>Dashboard</Link></p>
                                <p className='d-flex align-items-center gap-2'><span>Logout</span><i className="ri-logout-circle-line"></i></p>
                            </div>
                        </ToggleAccount>
                    </div>
                </div>
                {/* ======== user access ends======= */}
                </div>
            </Row>
            <Row className='hot__row'>
                <div className="sub__links navdown__wrapper d-flex align-items-center justify-content-between">
                    <div className='category__menu'>
                        <Link to='/' className='d-flex align-items-center gap-3'>
                        <i className="ri-layout-grid-line"></i>
                        <span>Browse All Categories</span>
                        <i className="ri-arrow-drop-down-line"></i>
                        </Link>
                    </div>
                    <div>
                        <Link to='/shop' className='shop__store d-flex align-items-center gap-2'>
                            <i class="ri-store-line"></i>
                            <span>Shop</span>
                        </Link>
                    </div>
                    <div className='top__links__cover'>
                        <i className="ri-menu-2-line" onClick={MenuTog}></i>
                        <div style={{display:`${menuToggle?'none':'block'}`}}>
                        <div className='hot__links'>
                            {
                                sub__links.map((item, index)=>{
                                    return <NavLink key={index} to={item.path} className={navClass => navClass.isActive?'activeshop__link':'remove__activeness'}>
                                        <span>{item.display}</span>
                                    </NavLink>
                                })
                            }
                        </div>
                        </div>
                    </div>
                    <div className='mode d-flex align-items-center justify-content-center'>
                        <i className="ri-settings-3-line"></i>
                    </div>
                </div>
            </Row>
            
        </Container>
    </div>
  )
}

export default Header