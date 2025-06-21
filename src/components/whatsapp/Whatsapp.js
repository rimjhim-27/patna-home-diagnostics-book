import { useState } from 'react';
import { sendWhatsAppMessage } from '../../services/api'; // Add this import

const WhatsApp = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await sendWhatsAppMessage({
        phone: '+919693631158', // Add your clinic's number
        message: message
      });
      alert('Message sent via WhatsApp!');
      setMessage('');
    } catch (error) {
      console.error('WhatsApp error:', error);
      alert('Failed to send WhatsApp message.');
    }
  };

  return (
    <div className="whatsapp-widget">
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <button type="submit">
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default WhatsApp;