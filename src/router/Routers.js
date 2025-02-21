import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import MarketSearchResultList from '../pages/MarketSearchResultList';
import Login from '../pages/Login';
import Role from '../pages/Role';
import Consultation from '../pages/Consultation';
import Thankyou from '../pages/Thankyou';
import About from '../pages/About';
import Vendors from '../pages/Vendors';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';
import VendorDetails from '../pages/VendorDetails';
import Register from '../pages/Register';
import SellerDashboard from '../pages/SellerDashboard';
import Checkout from '../pages/Checkout';
import VerifyAccount from '../pages/VerifyAccount';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/search' element={<MarketSearchResultList/>}/>
      <Route path='/consultation' element={<Consultation/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/vendors' element={<Vendors/>}/>
      <Route path='/vendors/:id' element={<VendorDetails/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/get-started' element={<Role/>}/>
      <Route path='/get-started/register' element={<Register/>}/>
      <Route path='/account/*' element={<SellerDashboard/>}/>
      <Route path='/thank-you' element={<Thankyou/>}/>
      <Route path='/checkout' element = {<Checkout/>}/>
      <Route path='/verify' element = {<VerifyAccount/>}/>
    </Routes>
  )
}

export default Routers