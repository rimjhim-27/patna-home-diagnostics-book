import { useState } from 'react';
import { submitContact } from '../../services/api'; // Add this import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await submitContact(formData);
      alert('Your message has been submitted successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Failed to submit message. Please try again.');
    }
  };

  // ... keep your existing render logic
};

export default Contact;