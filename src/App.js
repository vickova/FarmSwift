import React, {useEffect} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
 
  return (
    <Layout/>
  );
}

export default App;
