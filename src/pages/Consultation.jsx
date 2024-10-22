import React from 'react';
import { ConsultationStyle } from '../styles/PagesStyles';
import {ChatEngine} from 'react-chat-engine';

const Consultation = () => {

  return (
    <ConsultationStyle className='consultation__wrapper'>
      <ChatEngine projectID='a154996c-a611-4f0a-b581-98ac79403f39'
			userName='Victoria Olumide'
			userSecret='victoria'/>
    </ConsultationStyle>
  )
}

export default Consultation