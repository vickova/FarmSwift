import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'reactstrap';
import { SellerDashboardStyle } from '../styles/PagesStyles';
import AccountDetails from '../components/Account/AccountDetails';
import Dashboard from '../components/Account/Dashboard';
import Logo from '../assets/icons/swift-logo-rm.png';
import ToggleSideBar from '../components/Toggle/ToggleSideBar';
import ProfilePicture from '../assets/images/color-man.webp';

const SellerDashboard = () => {
    const sidebar__content = [
        {
            text:'Dashbord',
            icon: 'ri-dashboard-line',
            path:'/account/dashboard'
        },
        {
            text:'Order',
            icon: 'ri-shopping-cart-2-line',
            path:'/account'
        },
        {
            text:'Products',
            icon: 'ri-stock-line',
            path:'/account'
        },
        {
            text:'Customer',
            icon: 'ri-user-line',
            path:'/account'
        },
        {
            text:'Employee',
            icon: 'ri-account-box-line',
            path:'/account'
        },
        {
            text:'Billing',
            icon: 'ri-wallet-3-line',
            path:'/account'
        },
        {
            text:'Analytics',
            icon: 'ri-bar-chart-box-line',
            path:'/account'
        },
        {
            text:'Settings',
            icon: 'ri-settings-4-line',
            path:'/account'
        },
        {
            text:'Help',
            icon: 'ri-questionnaire-line',
            path:'/account'
        },
        {
            text:'Logout',
            icon: 'ri-logout-box-r-line',
            path:'/account'
        },
    ]
    const side__bar__sublinks = [
        {
            text:'Account information',
            icon: 'ri-logout-box-r-line',
            path:'/account'
        },
        {
            text:'Change Password',
            icon: 'ri-logout-box-r-line',
            path:'/account'
        },
        {
            text:'Notification',
            icon: 'ri-logout-box-r-line',
            path:'/account'
        },
        {
            text:'Security & Privacy',
            icon: 'ri-logout-box-r-line',
            path:'/account'
        },
    ]
  return (
    <SellerDashboardStyle>
        <Container>
            <Row className='dashboardcover'>
                <Col lg='2' className='sidebar'>
                <div className='seller-logo'>
                    <img src={Logo} alt="" />
                </div>
                    {
                        sidebar__content.map((item, index)=>{
                            if(item.text === 'Settings'){
                            return <ToggleSideBar>
                                {
                                    side__bar__sublinks.map((item, index)=>{
                                        return <NavLink key={index} to={item.path} className={`d-flex gap-2 align-items-center ${(ClassActive)=>ClassActive.isActive?'activeshop__link':'remove__activeness'}`}>
                                            <i className={item.icon}></i>
                                            <span>{item.text}</span>
                                        </NavLink>
                                    })
                                }
                            </ToggleSideBar>
                            }
                            else{
                                return <NavLink key={index} to={item.path} className={`d-flex gap-2 align-items-center ${(ClassActive)=>ClassActive.isActive?'activeshop__link':'remove__activeness'}`}>
                                <i className={item.icon}></i>
                                <span>{item.text}</span>
                            </NavLink>
                            }
                        })
                    }
                </Col>
                <Col lg='10' className='mainbar'>
                    <div className='top__bar d-flex align-items-center justify-content-between'>
                        <div className='main__bar__input d-flex align-items-center justify-content-between'>
                            <div className='d-flex gap-3 align-items-center'>
                                <i class="ri-search-line"></i>
                                <span>Search</span>
                            </div>
                            <input type="text" />
                        </div>
                        <div className='profile__cover d-flex gap-3 align-items-center'>
                            <i class="ri-mail-line"></i>
                            <i class="ri-notification-2-line"></i>
                            <div className='profile d-flex gap-3 align-items-center'>
                                <img src={ProfilePicture} alt="" />
                                <div className='profile__details'>
                                    <p>Jane Cooper</p>
                                    <p>janecooper123@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='inner'>
                        <Routes>
                            <Route path='/' element={<AccountDetails/>}/>
                            <Route path='/dashboard' element={<Dashboard/>}/>
                        </Routes>
                    </div>
                </Col>
            </Row>
        </Container>
    </SellerDashboardStyle>
  )
}

export default SellerDashboard