import React, {useState} from 'react';
import './Toggle.css'

const Toggle = ({children, title, icon, superscript}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className='toggle'>
        <button onClick={()=>setToggle(!toggle)}>
        <i className={icon}></i>
        <span className='superscript'>{superscript}</span>
        <span>{title}</span>
        </button>
        <div className='toggle-children' style={{display:`${toggle?'block':'none'}`}}>
            {children}
        </div>
    </div>
  )
}

export default Toggle