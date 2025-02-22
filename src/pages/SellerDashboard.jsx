import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'reactstrap';
import { SellerDashboardStyle } from '../styles/PagesStyles';
import AccountDetails from '../components/Account/AccountDetails';
import Dashboard from '../components/Account/Dashboard';
import Logo from '../assets/icons/swift-logo-rm.png';
import ToggleSideBar from '../components/Toggle/ToggleSideBar';
import Customer from './Customer';
import Password from './Password';
import Notification from './Notification';
import OrderDetails from './OrderDetails';
import OrderDetailsIndividual from './OrderDetailsIndividual';
import Privacy from './Privacy';
import Vendors from './Vendors';
import UploadProduct from './UploadProduct';


const SellerDashboard = () => {
    
    const sidebar__content = [
        {
            text:'Analytics',
            icon: 'ri-bar-chart-box-line',
            path:'/account/analytics'
        },
        {
            text:'Upload Product',
            icon: 'ri-shopping-cart-2-line',
            path:'/account/upload'
        },
        {
            text:'Settings',
            icon: 'ri-settings-4-line',
            path:'/account/'
        },
        {
            text:'Help',
            icon: 'ri-questionnaire-line',
            path:'/account/help'
        },
        {
            text:'Logout',
            icon: 'ri-logout-box-r-line',
            path:'/account'
        },
        {
            text:'Back to Home',
            icon: 'ri-home-4-line',
            path:'/'
        },
    ]
    const customer__sidebar__content = [
        {
            text:'Analytics',
            icon: 'ri-bar-chart-box-line',
            path:'/account/analytics'
        },
        {
            text:'Order',
            icon: 'ri-shopping-cart-2-line',
            path:'/account/order-details'
        },
        {
            text:'Settings',
            icon: 'ri-settings-4-line',
            path:'/account/'
        },
        {
            text:'Help',
            icon: 'ri-questionnaire-line',
            path:'/account/help'
        },
        {
            text:'Logout',
            icon: 'ri-logout-box-r-line',
            path:'/account'
        },
        {
            text:'Back to Home',
            icon: 'ri-home-4-line',
            path:'/'
        },
    ]
    const side__bar__sublinks = [
        {
            text:'Account information',
            icon: 'ri-account-box-line',
            path:'/account/account-details'
        },
        {
            text:'Change Password',
            icon: 'ri-shield-keyhole-line',
            path:'/account/change-password'
        },
        {
            text:'Account Details',
            icon: 'ri-notification-2-line',
            path:'/account/bank-details'
        },
        {
            text:'Security & Privacy',
            icon: 'ri-key-fill',
            path:'/account/privacy'
        },
    ]
    const [menuTog, setMenuTog] = useState(false)
    const userData = useSelector((state)=> state.AuthReducer?.user?.data);
  return (
    <SellerDashboardStyle>
        <Container className='seller-container'>
            <Row className='dashboardcover'>
                <Col lg='2' className='sidebar' style={{display:menuTog?'none':'block', left:0}}>
                <div className='seller-logo'>
                    <img src={Logo} alt="" />
                </div>
                    {userData?.role==='seller'?
                        sidebar__content:customer__sidebar__content.map((item, index)=>{
                            if(item.text === 'Settings'){
                            return <ToggleSideBar key={index}>
                                {
                                    side__bar__sublinks.map((item, index)=>{
                                        return <NavLink key={index} to={item.path} className={`d-flex gap-2 align-items-center ${(ClassActive)=>ClassActive.isActive?'dashboard__link':'remove__activeness'}`}>
                                            <i className={item.icon}></i>
                                            <span>{item.text}</span>
                                        </NavLink>
                                    })
                                }
                            </ToggleSideBar>
                            }
                            else{
                                return <NavLink key={index} to={item.path} className={`d-flex gap-2 align-items-center ${(ClassActive)=>ClassActive.isActive?'dashboard__link':'remove__activeness'}`}>
                                <i className={item.icon}></i>
                                <span>{item.text}</span>
                            </NavLink>
                            }
                        })
                    }
                </Col>
                <Col lg='10' className='mainbar'>
                    <div className='top__bar'>
                        <div className='main__bar__input d-flex align-items-center justify-content-between'>
                            <div className='d-flex gap-3 align-items-center'>
                                <i class="ri-search-line"></i>
                            </div>
                            <input type="text" />
                        </div>
                        <div className='profile__cover'>
                        <i className="ri-menu-2-line" onClick={()=>setMenuTog(!menuTog)}></i>
                            <i className="ri-mail-line"></i>
                            <i className="ri-notification-2-line"></i>
                            <div className='profile'>
                                <img
                                    src={userData?.photo} // Convert the file object to URL
                                    alt="Profile"
                                />
                                <div className='profile__details'>
                                    <p>{userData?.username}</p>
                                    <p>{userData?.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='inner' style={{height:'90%',overflowY:'auto'}}>
                        <Routes>
                            <Route path='/' element={<AccountDetails/>}/>
                            <Route path='/account-details' element={<AccountDetails/>}/>
                            <Route path='/analytics' element={<Dashboard/>}/>
                            <Route path='/customers' element={<Vendors/>}/>
                            <Route path='/bank-details' element={<Notification/>}/>
                            <Route path='/upload' element={<UploadProduct/>}/>
                            <Route path='/order-details' element={<OrderDetails/>}/>
                            <Route path='/order-details/:id' element={<OrderDetailsIndividual/>}/>
                            <Route path='/privacy' element={<Privacy/>}/>
                            <Route path='/change-password' element={<Password/>}/>
                        </Routes>
                    </div>
                </Col>
            </Row>
        </Container>
    </SellerDashboardStyle>
  )
}

export default SellerDashboard