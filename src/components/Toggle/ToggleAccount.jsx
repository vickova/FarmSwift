import React, {useState} from 'react';
import './Toggle.css'

const ToggleAccount = ({children, title, icon}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className='toggle'>
        <button onClick={()=>setToggle(!toggle)}>
        <i className={icon}></i>
        <span>{title}</span>
        </button>
        <div className='toggle-children' style={{display:`${toggle?'block':'none'}`}}>
            {children}
        </div>
    </div>
  )
}

export default ToggleAccount