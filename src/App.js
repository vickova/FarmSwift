import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';

const App = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  // const [initialized, setInitialized] = useState(false); // To prevent premature redirect

  // const userData = localStorage.getItem('user');

  // const isLoginPage =
  //   pathname === '/login' ||
  //   pathname === '/home' ||
  //   pathname === '/' ||
  //   pathname === '/get-started' ||
  //   pathname === '/get-started/register' ||
  //   pathname === '/verify';

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     dispatch({ type: 'LOGIN_SUCCESS', payload: JSON.parse(storedUser) });
  //   }
  //   setInitialized(true);
  // }, [dispatch]);

  // useEffect(() => {
  //   if (initialized && !userData && !isLoginPage) {
  //     navigate('/login');
  //   }
  // }, [initialized, userData, isLoginPage, navigate]);

  return <Layout />;
};

export default App;
