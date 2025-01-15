import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'reactstrap';
import { SellerDashboardStyle } from '../styles/PagesStyles';
import AccountDetails from '../components/Account/AccountDetails';
import Dashboard from '../components/Account/Dashboard';
import Logo from '../assets/icons/swift-logo-rm.png';
import ToggleSideBar from '../components/Toggle/ToggleSideBar';
import ProfilePicture from '../assets/images/color-man.webp';
import Customer from './Customer';
import Password from './Password';
import Notification from './Notification';
import OrderDetails from './OrderDetails';
import OrderDetailsIndividual from './OrderDetailsIndividual';
import Privacy from './Privacy';
import Vendors from './Vendors';

const SellerDashboard = () => {
    const sidebar__content = [
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
            text:'Notification',
            icon: 'ri-notification-2-line',
            path:'/account/notification'
        },
        {
            text:'Security & Privacy',
            icon: 'ri-key-fill',
            path:'/account/privacy'
        },
    ]
    const userData = useSelector((state)=> state.UserReducer.UserData);
  return (
    <SellerDashboardStyle>
        <Container className='seller-container'>
            <Row className='dashboardcover'>
                <Col lg='2' className='sidebar'>
                <div className='seller-logo'>
                    <img src={Logo} alt="" />
                </div>
                    {
                        sidebar__content.map((item, index)=>{
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
                            <i className="ri-mail-line"></i>
                            <i className="ri-notification-2-line"></i>
                            <div className='profile d-flex gap-3 align-items-center'>
                                <img src={URL.createObjectURL(userData?.profilePicture)} alt="" />
                                <div className='profile__details'>
                                    <p>{userData?.firstname} {userData?.lastname}</p>
                                    <p>{userData?.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='inner'>
                        <Routes>
                            <Route path='/' element={<AccountDetails/>}/>
                            <Route path='/account-details' element={<AccountDetails/>}/>
                            <Route path='/analytics' element={<Dashboard/>}/>
                            <Route path='/customers' element={<Vendors/>}/>
                            <Route path='/notification' element={<Notification/>}/>
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