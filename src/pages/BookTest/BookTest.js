import { useState } from 'react';
import { bookTest } from '../../services/api'; // Add this import

const BookTest = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    patientGender: '',
    patientPhone: '',
    selectedTests: [],
    bookingDate: '',
    timeSlot: ''
  });

  // Modify your existing handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Transform data to match backend schema
      const bookingData = {
        patient: {
          name: formData.patientName,
          age: formData.patientAge,
          gender: formData.patientGender,
          contact: formData.patientPhone
        },
        tests: formData.selectedTests.map(test => ({
          name: test.name,
          price: test.price
        })),
        bookingDate: formData.bookingDate,
        timeSlot: formData.timeSlot
      };

      const response = await bookTest(bookingData);
      
      // Add success notification
      alert(`Booking successful! ID: ${response.data.booking._id}`);
      
      // Reset form
      setFormData({
        patientName: '',
        patientAge: '',
        patientGender: '',
        patientPhone: '',
        selectedTests: [],
        bookingDate: '',
        timeSlot: ''
      });

    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed. Please try again.');
    }
  };

  // ... keep your existing render logic
};

export default BookTest;