import React, {useEffect} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {
  const location = useLocation();
  const userRegister = useSelector((state)=> state.AuthReducer.user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

useEffect(()=>{
      localStorage.setItem('user', JSON.stringify(userRegister))
  }, [userRegister])
 
  return (
    <Layout/>
  );
}

export default App;
