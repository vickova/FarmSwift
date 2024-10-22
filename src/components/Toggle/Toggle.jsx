import React, {useState, useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './Toggle.css'

const Toggle = ({children, title, icon, superscript}) => {
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
        <button onClick={()=>setToggle(!toggle)}>
        <i className={icon}></i>
        <p className='superscript'><span>{superscript}</span></p>
        <span>{title}</span>
        </button>
        <div className='toggle-children-overlay' style={{display:`${toggle?'block':'none'}`}} onClick={ToggleSetter}>
          <div className='toggle-children' onClick={()=>setToggle(true)} ref={toggleRef}>
            {children}
          </div>
        </div>
    </div>
  )
}

export default Toggle