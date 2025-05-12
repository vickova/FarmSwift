import React from 'react';
import ChatInterface from '../components/ChatInterface/ChatInterface';
import PlantHistorySidebar from '../components/ChatInterface/PlantHistorySidebar';

const Consultation = () => {

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <PlantHistorySidebar/>
      <ChatInterface/>
    </div>
  )
}

export default Consultation