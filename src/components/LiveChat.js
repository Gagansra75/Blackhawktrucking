import React, { useState, useRef, useEffect } from 'react';

function LiveChat({ onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! Welcome to Blackhawk Trucking. How can I help you today?", sender: "agent", timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const agentResponse = {
        id: messages.length + 2,
        text: getAutomatedResponse(inputMessage),
        sender: "agent",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const getAutomatedResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('quote')) {
      return "For pricing information, please visit our Products page or submit a Quote Request. Our team will get back to you within 24 hours!";
    } else if (lowerMsg.includes('track') || lowerMsg.includes('shipment')) {
      return "You can track your shipment on our Tracking page. Just enter your tracking number to see real-time updates!";
    } else if (lowerMsg.includes('contact') || lowerMsg.includes('phone') || lowerMsg.includes('email')) {
      return "You can reach us at (555) 123-4567 or email us at info@blackhawktrucking.com. We're available 24/7!";
    } else if (lowerMsg.includes('hours') || lowerMsg.includes('open')) {
      return "We operate 24/7 to serve you better! Our customer service team is always available.";
    } else {
      return "Thank you for your message! A member of our team will respond shortly. Is there anything else I can help you with?";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="live-chat-widget">
      <div className="chat-header">
        <div className="chat-header-info">
          <div className="agent-avatar">👤</div>
          <div>
            <h4>Blackhawk Support</h4>
            <span className="status-online">● Online</span>
          </div>
        </div>
        <button className="chat-close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="message-bubble">
              {msg.text}
            </div>
            <div className="message-time">
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="message agent">
            <div className="message-bubble typing-indicator">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default LiveChat;
