import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.AuthReducer?.user?.data);
  const {pathname} = useLocation();
  const isLoginPage = pathname === '/login' || pathname === '/home'|| pathname === '/' || pathname === '/get-started' || pathname === '/get-started/register' || pathname === '/verify';
  useEffect(() => {
    if (!userData && !isLoginPage) {
      navigate('/login');
    }
  }, [userData, navigate]);


  return <Layout />;
}

export default App;
