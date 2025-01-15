import React, { useState } from 'react';
import './ConsultationButton.css';
import { useNavigate } from 'react-router-dom';

const ConsultationButton = () => {
  const navigate = useNavigate()
  const [openConsultation, setOpenConsultation] = useState(false);
  const handleConsult = ()=>{
    setOpenConsultation(!openConsultation)
    console.log(openConsultation)
    if (openConsultation===true){
      console.log('right is 0')
    }
  }
  const handleNavigation = ()=>{
    navigate('/consultation');
    setOpenConsultation(false)
  }
  return (
    <div className='consultation__cover' style={{}}>
      <div className="consult__control">
        <button onClick={handleConsult}><i className="ri-customer-service-2-line"></i></button>
      </div>
      <div className="sticky-consultation" style={{right:openConsultation?0:-240, display:openConsultation?'block':'none'}}>
          <p>Click here for Consultation</p>
          <button onClick={handleNavigation}><span>Consult AI</span><i className="ri-customer-service-2-line"></i></button>
      </div>
    </div>
  )
}

export default ConsultationButton