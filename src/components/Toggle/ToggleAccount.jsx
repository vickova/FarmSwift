import React, {useState} from 'react';
import './ToggleAccount.css'

const ToggleAccount = ({children, title, icon, userData}) => {
    const [toggle, setToggle] = useState(false);
    const ToggleSetter = (e)=>{
      if(e.target.classList.value === 'toggle-children-overlay-account'){
        setToggle(!toggle);
      }

    }
  return (
    <div className='toggle'>
        <button onClick={()=>setToggle(!toggle)}>
        {userData?.photo?
        <img
              src={userData?.photo} // Convert the file object to URL
              alt="Profile"
              style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />:
        <i className={icon}></i>
        }
        <span className='toggle-title'>{userData?.firstname?userData?.firstname:title}</span>
        </button>
        <div className='toggle-children-overlay-account' style={{display:`${toggle?'block':'none'}`}} onClick={ToggleSetter}>
        <div className='toggleaccount-children' style={{display:`${toggle?'block':'none'}`}}>
            {children}
        </div>
        </div>
    </div>
  )
}

export default ToggleAccount