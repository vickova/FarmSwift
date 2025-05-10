import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { AddToCart, Logout, ReduceCart, RemoveCart, RemoveFromWish, searchItemAction, SignUser } from '../../redux/actions';
import {NavLink,Link, useLocation, useNavigate} from 'react-router-dom';
import Logo from '../../assets/icons/swift-logo.png';
import Toggle from '../Toggle/Toggle';
import ToggleAccount from '../Toggle/ToggleAccount';
import './Header.css'
import ToggleCategories from '../Toggle/ToggleCategories';
// import { useDelete, useGet, usePost } from '../../hooks/useFetch';
import { useGetP, useDelete, usePost, usePatch } from '../../hooks/useApi';
import { BASE_URL } from '../../utils/config';
import Loader from '../Loader/Loader';


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [wishItem, setWishItem] = useState(null);
    const [cartItem, setCartItem] = useState(null);
    const [productId, setProductId] = useState('');
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log({"HeaderDataaaaaaaaaa":userData})
    // if(!userData){
    //     navigate('login')
    //   }
    const deleteCartData = useDelete(`/carts/${cartItem}`, ['carts', 'wish', cartItem]);
    const deleteWishData = useDelete(`/wishes/${wishItem}`, ['wishes', wishItem]);
    const addtoCartData = usePost(`/carts/${wishItem}`, ['carts', productId]);
    const reducefromCartData = usePatch(`/carts/reduce/${wishItem}`, ['carts', productId]);


  const { data: AddtoCartResponse, postData } = usePost(`/carts/${productId}`, ['carts', productId]);

    const userId = userData?._id;
    const { data: AllCartItems, loading: LoadingCartItems, error: CartItemsError } = useGetP(userId ? `/carts/${userId}` : null, ['carts'], !!userId);

    const { data: AllWishesItems, loading: LoadingWishesItems, error: WishesItemsError } = useGetP(userId ? `/wishes/${userId}` : null, ['wishes'], !!userId);


    const wishList = AllWishesItems?.data

    console.log(wishList)
    const [previewImage, setPreviewImage] = useState('');
    const headerRef = useRef();
    const {pathname} = useLocation();
    const [menuToggle, setMenuToggle] = useState(false)
    const accountexists = pathname.includes('account')

    const { data: AllUsers, loading: LoadingUsers, error: UsersError } = useGetP(`/users`, ['users']);

    const deleteWish = (productId) => {
        if (!userData?.isVerified) {
          console.log('Please login');
          return navigate('/login');
        }
        setWishItem(productId); // Store the ID in state
        deleteWishData.mutate(productId,{})
      };
      const deleteCart = (productId) => {
        if (!userData?.isVerified) {
          console.log('Please login');
          return navigate('/login');
        }
        setCartItem(productId); // Store the ID in state
        deleteCartData.mutate(productId,{})
      };
      const handleAddToCart = (productId) => {
        console.log('clicked')
        if (userData?.isVerified) {
            setWishItem(productId); // Store the ID in state
          addtoCartData.mutate(productId,{})
    
        } else {
          console.log('Please login');
          return navigate('/login');
        }
      };
    const handleReduceFromCart = (productId) => {
        console.log('clicked')
        if (userData?.isVerified) {
            setWishItem(productId); // Store the ID in state
          reducefromCartData.mutate(productId,{})
    
        } else {
          console.log('Please login');
          return navigate('/login');
        }
      };

    const SubmitSearch =(e)=>{
        e.preventDefault();
        navigate('/search')
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
    useEffect(()=>{
        setMenuToggle(false)
    }, [pathname])
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
        path:'/contact',
        display:'Contact'
    }
]
const MenuTog= ()=>{
    setMenuToggle(!menuToggle);
}
const handleLogout = ()=>{
        dispatch(Logout())
        localStorage.removeItem('user');
    }
  return (
    <div ref={headerRef} style={{display:`${pathname==='/get-started'||pathname==='/checkout'||pathname==='/get-started/register'||accountexists||pathname==='/login'?'none':'block'}`}}>
        <Container className='container'>
            <Row >
                <div className="navup__wrapper d-flex align-items-center justify-content-between py-2">
                    <div className="nav__middle">
                        <p className='m-0'>Supper Value Deals - Save more with coupons</p>
                    </div>
                    {/* ======== user access ends======= */}
                    {/* ========language menu starts====== */}
                    <div className="cur-lang align-items-center d-flex justify-content-between gap-2">
                        <div className='align-items-center d-flex gap-2'><p className='help m-0'>Need help? Call us</p> <i className="help__icon ri-questionnaire-line"></i> <span className='help-contact'>+2348021585694</span></div>
                        <select name="Language" id="language" disabled="disabled">
                            <option value="English">English</option>
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
                        <Form className='form d-flex align-items-center' onSubmit={SubmitSearch}>
                                <input type="text" placeholder='Search for products...' required id='search' onChange={(e)=>dispatch(searchItemAction(e.target.value))} style={{margin:0}}/>
                                <Button className='nav__btn'>Search</Button>
                                <Button className='mobile__btn'><i className="ri-search-line"></i></Button>
                        </Form>
                    </div>
                    {/* ========search ends======== */}
                    {/* ======== user access begins====== */}
                    <div className="nav__right">
                    {/* logout button and username comes here when user login */}
                    <div className="other__btns d-flex gap-4 align-items-center">
                    {userData?.role === 'seller' && 
                        <button className='cart__wish' onClick={()=>navigate('/account/upload')} style={{backgroundColor:'transparent'}}>
                        <i className="ri-upload-2-line"></i>
                        <span className='toggle-title' style={{color:'#252525'}}>Upload Product</span>
                        </button>}
                    <Toggle title={'Wishlist'} icon={'ri-heart-line'} superscript={wishList?.length}>
                        <ul>
                            <h3>{`Wish List (${wishList?.length})`}</h3>
                            {wishList?.length === 0? 
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
                                        wishList?.map((item, index)=>{
                                            const SellerData = AllUsers?.data.find((user) => user._id === item.product?.createdBy);
                                            console.log(item?.product)
                                            return <Row key={index} className='cart__row d-flex align-items-center'>
                                                <Col lg='6' className='cart__data'>
                                                    <div className='cartproduct d-flex gap-3 align-items-center'>
                                                        <div className='cartimage d-flex justify-content-center'>
                                                            <img src={item.product?.photo} alt="" />
                                                        </div>
                                                        <div className='cartproduct__text'>
                                                            <h3>{item.product?.description}</h3>
                                                            <p>{SellerData?.username}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg='2' className='cart__data'>{item.price}</Col>
                                                <Col lg='2' className='cart__data'><button onClick={()=>{handleAddToCart(item?.product._id); deleteWish(item?.product._id)}}>Add to Cart</button></Col>
                                                <Col lg='1' className='cart__data'>{!deleteWishData.isPending ? <i className="ri-close-fill" onClick={()=>deleteWish(item?.product._id)}></i> : <Loader/>}</Col>
                                            </Row>
                                        })
                                    }
                                </div>
                            </Container>
                        }
                        </ul>
                        </Toggle>
                        <Toggle title={'Cart'} icon={'ri-shopping-cart-2-line'} superscript={AllCartItems?.data?.length}>
                        <ul>
                            <h3>{`shopping Cart (${AllCartItems?.data.length})`}</h3>
                            {AllCartItems?.data.length === 0? 
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
                                        AllCartItems?.data.map((item, index)=>{
                                            console.log({item})
                                            let totalPrice =item?.price * item?.quantity;
                                            const SellerData = AllUsers?.data.find((user) => user._id === item.product?.createdBy);
                                            console.log(totalPrice)
                                            return <Row key={index} className='cart__row d-flex align-items-center'>
                                                <Col lg='4' className='cart__data'>
                                                    <div className='cartproduct d-flex gap-3 align-items-center'>
                                                        <div className='cartimage d-flex justify-content-center'>
                                                            <img src={item?.product?.photo} alt="" />
                                                        </div>
                                                        <div className='cartproduct__text'>
                                                            <h3>{item.product?.description}</h3>
                                                            <p>{SellerData?.username}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg='2' className='cart__data'>{item.price}</Col>
                                                <Col lg='3' className='cart__data d-flex justify-content-center gap-3 align-items-center'><button onClick={()=>handleReduceFromCart(item?.product._id)}>-</button><span>{item.quantity}</span><button onClick={()=>handleAddToCart(item?.product._id)}>+</button></Col>
                                                <Col lg='2' className='cart__data'>#{totalPrice}</Col>
                                                <Col lg='1' className='cart__data'>{!deleteCartData.isPending ? <i className="ri-close-fill" onClick={()=>deleteCart(item?.product._id)}></i> : <Loader/>}</Col>
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
                                            <p>#{AllCartItems?.data.reduce((acc, item)=>acc+(item?.price * item?.quantity), 0)}</p>
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
                        <ToggleAccount title={'Account'} icon={'ri-user-3-line'} userData={userData}>
                            <div className='account-list'>
                                <p><Link to='/account'>Dashboard</Link></p>
                                {userData?
                                <p className='d-flex align-items-center gap-2' onClick={handleLogout}><span>LogOut</span><i className="ri-logout-circle-line"></i></p>:
                                <p className='d-flex align-items-center gap-2' onClick={()=>navigate('/login')}><span>Login</span><i className="ri-logout-circle-line"></i></p>
                                }
                            </div>
                        </ToggleAccount>
                    </div>
                </div>
                {/* ======== user access ends======= */}
                </div>
            </Row>
            <Row className='hot__row'>
                <div className="sub__links navdown__wrapper d-flex align-items-center justify-content-between">
                    <ToggleCategories icon={'ri-arrow-drop-down-line'} className='sub__links'/>
                    <div>
                        <Link to='/shop' className='shop__store d-flex align-items-center gap-2'>
                            <i className="ri-store-line"></i>
                            <span>Shop</span>
                        </Link>
                    </div>
                    <div className='top__links__cover'>
                        <i className="ri-menu-2-line" onClick={MenuTog}></i>
                        <div style={{display:`${menuToggle?'block':'none'}`}}>
                        <div className='mobile__hot__links'>
                            {
                                sub__links.map((item, index)=>{
                                    return <NavLink key={index} to={item.path} className={navClass => navClass.isActive?'activeshop__link':'remove__activeness'}>
                                        <span>{item.display}</span>
                                    </NavLink>
                                })
                            }
                        </div>
                        </div>
                        <div className='desktop__hot__links'>
                            {
                                sub__links.map((item, index)=>{
                                    return <NavLink key={index} to={item.path} className={navClass => navClass.isActive?'activeshop__link':'remove__activeness'}>
                                        <span>{item.display}</span>
                                    </NavLink>
                                })
                            }
                        </div>
                    </div>
                    <button onClick={()=>navigate('/account')} className='mode d-flex align-items-center justify-content-center' style={{backgroundColor:'transparent'}}>
                        <i className="ri-settings-3-line"></i>
                    </button>
                </div>
            </Row>
            
        </Container>
    </div>
  )
}

export default Header