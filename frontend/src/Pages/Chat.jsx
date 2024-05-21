import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './CSS/Chat.css'; // CSS dosyasını dahil ediyoruz

const socket = io('http://localhost:4000'); // Backend'in çalıştığı port

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Bağlantı kurulduğunda
    socket.on('connect', () => {
      setIsConnected(true);
    });

    // Bağlantı kesildiğinde
    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    // Yeni bir mesaj alındığında
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, { ...message, sent: false }]);
    });

    // Cleanup function to remove event listeners
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msg = { text: message, sent: true };
      setMessages((prevMessages) => [...prevMessages, msg]);
      socket.emit('message', msg);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h1>Chat Ekranı</h1>
      <div className="status">
        {isConnected ? <span style={{ color: 'green' }}>Bağlandı</span> : <span style={{ color: 'red' }}>Bağlantı yok</span>}
      </div>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sent ? 'sent' : 'received'}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mesaj yazın..."
          className="input"
        />
        <button type="submit" className="button">Gönder</button>
      </form>
    </div>
  );
}

export default Chat;
