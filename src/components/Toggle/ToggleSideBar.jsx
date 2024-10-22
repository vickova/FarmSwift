import React, {useState, useRef, useEffect} from 'react';
import './Toggle.css'
import { Link } from 'react-router-dom';

const ToggleSideBar = ({children}) => {
    const [toggle, setToggle] = useState(false);
    
  return (
    <div className='toggle__side__bar' onClick={()=>setToggle(!toggle)}>
        <Link className='d-flex gap-2' to='/account'>
            <i className='ri-settings-4-line'></i>
            <span>Settings</span>
        </Link>
          <div style={{display:`${toggle?'block':'none'}`}}>
            {children}
          </div>
    </div>
  )
}

export default ToggleSideBar