import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.AuthReducer?.user?.data);

  useEffect(() => {
    if (!userData) {
      navigate('/login');
    }
  }, [userData, navigate]);


  return <Layout />;
}

export default App;
