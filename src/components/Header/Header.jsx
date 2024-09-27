import React from 'react';
import { Container, Row, Button, Form } from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';
import Logo from '../../assets/icons/swift-logo.png';
import Toggle from '../Toggle/Toggle';
import ToggleAccount from '../Toggle/ToggleAccount';
import './Header.css'


const Header = () => {
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
  return (
    <div>
        <Container className='container'>
            <Row >
                <div className="navup__wrapper d-flex align-items-center justify-content-between py-2">
                    {/* ========header about us menu starts====== */}
                    <div className="navigation">
                        <ul className='menu align-items-center d-flex gap-5'>
                            {
                                about__links.map((item, index)=>{
                                    return <li className='nav__item' key={index}>
                                        <NavLink to={item.path} className={navClass => navClass.isActive?'activeshop__link':'remove__activeness'}>{item.display}</NavLink>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    {/* ======== user access begins====== */}
                    <div className="nav__middle">
                        <p className='m-0'>Supper Value Deals - Save more with coupons</p>
                    </div>
                    {/* ======== user access ends======= */}
                    {/* ========language menu starts====== */}
                    <div className="cur-lang align-items-center d-flex gap-2">
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
                <div className="navdown__wrapper d-flex gap-3 align-items-center justify-content-between py-3">
                    {/* =======logo starts====== */}
                    <div className="logo">
                        <img src={Logo} alt="FarmSwift logo" />
                    </div>
                    {/* =======logo ends======= */}
                    {/* ========search starts====== */}
                    <div className="form-wrapper">
                        <Form className='form d-flex align-items-center'>
                                <input type="text" placeholder='Search for products...' required id='username'/>
                        <Button className='nav__btn'>Search</Button>
                        </Form>
                    </div>
                    {/* ========search ends======== */}
                    {/* ======== vendor============= */}
                    <div>
                        <Button className='vendor__btn d-flex align-items-center gap-2'><span>Become Vendor</span> <i className="ri-arrow-right-line"></i></Button>
                    </div>
                    {/* ========= vendor============ */}
                    {/* ======== user access begins====== */}
                    <div className="nav__right">
                    {/* logout button and username comes here when user login */}
                    <div className="other__btns d-flex gap-4 align-items-center">
                        <Toggle title={'Wishlist'} icon={'ri-heart-line'} superscript={'2'}>
                        <ul>
                            <h3>Some wishlist information</h3>
                        </ul>
                        </Toggle>
                        <Toggle title={'Cart'} icon={'ri-shopping-cart-2-line'} superscript={'2'}>
                        <ul>
                            <h3>Some add to cart information</h3>
                        </ul>
                        </Toggle>
                        
                        <ToggleAccount title={'Account'} icon={'ri-user-3-line'}>
                        <ul>
                            <li>Dashboard</li>
                            <li></li>
                            <li></li>
                        </ul>
                        </ToggleAccount>
                    </div>
                </div>
                {/* ======== user access ends======= */}
                </div>
            </Row>
            <Row>
                <div className="sub__links navdown__wrapper d-flex align-items-center justify-content-between">
                <div className='category__menu'>
                    <Link to='/' className='d-flex align-items-center gap-3'>
                    <i class="ri-layout-grid-line"></i>
                    <span>Browse All Categories</span>
                    <i class="ri-arrow-drop-down-line"></i>
                    </Link>
                </div>
                <div>
                    <Link to='/shop'>
                    <i class="ri-fire-line"></i>
                    <span>Shop</span>
                    </Link>
                </div>
                <div className='hot__links d-flex align-items-center gap-5'>
                {
                    sub__links.map((item, index)=>{
                        return <NavLink key={index} to={item.path} className={navClass => navClass.isActive?'activeshop__link':'remove__activeness'}>
                            <span>{item.display}</span>
                        </NavLink>
                    })
                }
                </div>
                <div className='mode d-flex align-items-center justify-content-center'>
                <i class="ri-settings-3-line"></i>
                </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Header