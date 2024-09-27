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
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/thank-you' element={<Thankyou/>}/>
    </Routes>
  )
}

export default Routers