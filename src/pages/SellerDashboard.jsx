import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Nav, Button } from 'reactstrap';
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
import Help from './Help';
import Vendors from './Vendors';
import UploadProduct from './UploadProduct';
import CustomerDashboard from '../components/Account/CustomerDashboard';
import { Logout } from '../redux/actions';
import { useDispatch } from 'react-redux';


const SellerDashboard = () => {
    const [menuTog, setMenuTog] = useState(false)
    const userData = useSelector((state)=> state.AuthReducer?.user?.data);
    console.log(userData)
    
    const role = localStorage.getItem('selectedRole');
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData) {
        navigate('/login');
        }
    }, [userData, navigate]);
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
        // {
        //     text:'Account Details',
        //     icon: 'ri-notification-2-line',
        //     path:'/account/bank-details'
        // },
        // {
        //     text:'Security & Privacy',
        //     icon: 'ri-key-fill',
        //     path:'/account/privacy'
        // },
    ]
    const handleLogout = ()=>{
        dispatch(Logout())
        localStorage.removeItem('user');
        navigate('/login')
    }
  return (
    <SellerDashboardStyle>
        <Container className='seller-container'>
            <Row className='dashboardcover'>
                <Col lg='2' className='sidebar' style={{display:menuTog?'none':'block', left:0}}>
                <div className='seller-logo'>
                    <img src={Logo} alt="" />
                </div>
                {userData?.role==='seller'?
                    <>
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
                            }else if(item.text === 'Logout'){
                                return <button onClick={handleLogout} key={index} style={{border:'none', backgroundColor:'transparent'}} className={`d-flex gap-2 align-items-center ${(ClassActive)=>ClassActive.isActive?'dashboard__link':'remove__activeness'}`}> 
                                    <i className={item?.icon}></i>
                                <span>{item?.text}</span>
                                </button>
                            }
                                   
                            else{
                                return <NavLink key={index} to={item?.path} className={`d-flex gap-2 align-items-center ${(ClassActive)=>ClassActive.isActive?'dashboard__link':'remove__activeness'}`}>
                                <i className={item?.icon}></i>
                                <span>{item?.text}</span>
                            </NavLink>
                            }
                        })
                    }
                    </>:
                    <>
                    {
                    customer__sidebar__content.map((item, index)=>{
                            console.log(item)
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
                            }else if(item.text === 'Logout'){
                                return <button onClick={handleLogout} key={index} style={{border:'none', backgroundColor:'transparent'}} className={`d-flex gap-2 align-items-center ${(ClassActive)=>ClassActive.isActive?'dashboard__link':'remove__activeness'}`}> 
                                    <i className={item?.icon}></i>
                                <span>{item?.text}</span>
                                </button>
                            }
                            else{
                                return <NavLink key={index} to={item?.path} className={`d-flex gap-2 align-items-center ${(ClassActive)=>ClassActive.isActive?'dashboard__link':'remove__activeness'}`}>
                                <i className={item?.icon}></i>
                                <span>{item?.text}</span>
                            </NavLink>
                            }
                        })
                    }
                    </>
                }
                </Col>
                <Col lg='10' className='mainbar'>
                    <div className='top__bar' style={{margin:'1rem 0'}}>
                        <div className='main__bar__input d-flex align-items-center justify-content-between'>
                            <div className='d-flex gap-3 align-items-center'>
                                <i class="ri-search-line"></i>
                            </div>
                            <input type="text" style={{margin:0, padding:0}}/>
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
                            <Route path='/analytics' element={role==='seller'?<Dashboard/>:<CustomerDashboard/>}/>
                            <Route path='/customers' element={<Vendors/>}/>
                            <Route path='/bank-details' element={<Notification/>}/>
                            <Route path='/upload' element={<UploadProduct/>}/>
                            <Route path='/order-details' element={<OrderDetails/>}/>
                            <Route path='/order-details/:id' element={<OrderDetailsIndividual/>}/>
                            <Route path='/help' element={<Help/>}/>
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