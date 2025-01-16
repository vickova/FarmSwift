import React, { useState } from "react";
import "./ChatInterface.css";

const ChatInterface = () => {
  const [messages, setMessages] = useState([]); // Stores the chat messages
  const [input, setInput] = useState(""); // Stores the user input
    const [previewImage, setPreviewImage] = useState(null); // For previewing the selected image
  

  // Handle message sending
  const handleSendMessage = () => {
    console.log('sending')
    console.log(messages)
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]); // Add user's message
      setInput(""); // Clear input
      // Simulate AI response (to be replaced by backend logic)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "This is an AI response.", sender: "ai" },
        ]);
      }, 1000);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file)
    

    // Generate a preview of the selected image
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
      setMessages([...messages, { text: reader.result, sender: "user" }]);
    };
}
    

  // Handle input change
  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            style={{display:'flex', justifyContent:message.sender === "user" ? "end" : "start"}}
          >
            <div className={`chat-message ${
              message.sender === "user" ? "user-message" : "ai-message"
            }`}>
                {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
        className="chat-type"
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={handleInputChange}
          style={{marginRight:0}}
        />
        <div style={{width:'8%', display:'flex', justifyContent:'center'}}>
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}

                    />
                    <label
                      htmlFor="fileInput"
                      style={{
                        display: 'inline-block',
                        color: '#fff',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        width:'100%'
                      }}
                    >
                      <i className="ri-attachment-2" style={{width:'100%', fontSize:'1.6rem', height:'30px'}}></i>
                    </label>
                  </div>
                  <div onClick={handleSendMessage} style={{width:'8%', display:'flex', justifyContent:'center'}}>
                    <i class="ri-send-plane-fill" style={{fontSize:'1.6rem'}}></i>
                  </div>
      </div>
    </div>
  );
};

export default ChatInterface;
