import React, {useState} from 'react';
import './ToggleAccount.css'

const ToggleAccount = ({children, title, icon, userData}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className='toggle'>
        <button onClick={()=>setToggle(!toggle)}>
        {userData?.profilePicture?
        <img
              src={URL.createObjectURL(userData?.profilePicture)} // Convert the file object to URL
              alt="Profile"
              style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />:
        <i className={icon}></i>
        }
        <span className='toggle-title'>{userData?.firstname?userData?.firstname:title}</span>
        </button>
        <div className='toggleaccount-children' style={{display:`${toggle?'block':'none'}`}}>
            {children}
        </div>
    </div>
  )
}

export default ToggleAccount