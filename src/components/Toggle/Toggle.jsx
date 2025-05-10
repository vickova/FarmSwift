import React, {useState, useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Toggle.css'

const Toggle = ({children, title, icon, superscript}) => {
      const userData = JSON.parse(localStorage.getItem('user'));
  
  const toggleRef = useRef();
    const [toggle, setToggle] = useState(false);
    const {pathname} = useLocation()
    const ToggleSetter = (e)=>{
      if(e.target.classList.value === 'toggle-children-overlay'){
        setToggle(!toggle);
      }

    }
    useEffect(()=>{
      setToggle(false)
    }, [pathname])
  return (
    <div className='toggle'>
        <button className='cart__wish' onClick={()=>setToggle(!toggle)} disabled={userData?.role === 'seller'}>
        <i className={icon}></i>
        <p style={{display:userData?.role === 'seller'?'none':'block'}} className='superscript'><span>{superscript}</span></p>
        <span className='toggle-title'>{title}</span>
        </button>
        <div className='toggle-children-overlay' style={{display:`${toggle?'block':'none'}`}} onClick={ToggleSetter}>
          <div className='toggle-children'>
          <div className="close-menu d-flex justify-content-end">
            <i className="ri-close-line" onClick={()=>setToggle(false)}></i>
          </div>
            {children}
          </div>
        </div>
    </div>
  )
}

export default Toggle