import React, {useState} from 'react';
import './ToggleAccount.css'

const ToggleAccount = ({children, title, icon}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className='toggle'>
        <button onClick={()=>setToggle(!toggle)}>
        <i className={icon}></i>
        <span className='toggle-title'>{title}</span>
        </button>
        <div className='toggleaccount-children' style={{display:`${toggle?'block':'none'}`}}>
            {children}
        </div>
    </div>
  )
}

export default ToggleAccount