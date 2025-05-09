import React from 'react';
import Routers from '../../router/Routers';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
  return (
    <>
        <Header/>
        <Routers/>
        <ToastContainer/>
        <Footer/>
    </>
  )
}

export default Layout