import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import MarketPlace from '../pages/MarketPlace';
import MarketPlaceDetails from '../pages/MarketPlaceDetails';
import MarketSearchResultList from '../pages/MarketSearchResultList';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Consultation from '../pages/Consultation';
import Thankyou from '../pages/Thankyou';
import About from '../pages/About';
import Vendors from '../pages/Vendors';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';
import VendorDetails from '../pages/VendorDetails';
import RegisterCustomer from '../pages/RegisterCustomer';
import RegisterSeller from '../pages/RegisterSeller';
import SellerDashboard from '../pages/SellerDashboard';
import Checkout from '../pages/Checkout';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/marketplace' element={<MarketPlace/>}/>
      <Route path='/marketplace/:id' element={<MarketPlaceDetails/>}/>
      <Route path='/marketplace/saerch' element={<MarketSearchResultList/>}/>
      <Route path='/consultation' element={<Consultation/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/vendors' element={<Vendors/>}/>
      <Route path='/vendors/:id' element={<VendorDetails/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/register/customer' element={<RegisterCustomer/>}/>
      <Route path='/register/seller' element={<RegisterSeller/>}/>
      <Route path='/account/*' element={<SellerDashboard/>}/>
      <Route path='/thank-you' element={<Thankyou/>}/>
      <Route path='/checkout' element = {<Checkout/>}/>
    </Routes>
  )
}

export default Routers