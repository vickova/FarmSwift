import React from 'react';
import '../styles/Consultation.css';
import {ChatEngine} from 'react-chat-engine';

const Consultation = () => {

  return (
    <div className='consultation__wrapper'>
      <ChatEngine projectID='a154996c-a611-4f0a-b581-98ac79403f39'
			userName='Victoria Olumide'
			userSecret='victoria'/>
    </div>
  )
}

export default Consultation