import { useEffect, useState, useContext } from 'react';
import { fetchTests, submitBooking } from '../services/api';
import { BookingContext } from '../context/BookingContext';

const Booking = () => {
  const { state, dispatch } = useContext(BookingContext);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  // Fetch tests on mount
  useEffect(() => {
    const loadTests = async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const tests = await fetchTests();
        dispatch({ type: 'SET_TESTS', payload: tests });
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load tests' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    loadTests();
  }, [dispatch]);

  // Filter and sort tests
  const filteredTests = state.tests.filter(test => {
    if (filter === 'all') return true;
    return test.category === filter;
  }).sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return a[sortBy] - b[sortBy];
  });

  const handleTestSelection = (testId) => {
    dispatch({ type: 'TOGGLE_TEST', payload: testId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'SET_SUBMITTING', payload: true });
      await submitBooking({
        patient: patientDetails,
        tests: state.selectedTests,
        date: state.appointmentDate
      });
      dispatch({ type: 'BOOKING_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: 'Booking failed' });
    } finally {
      dispatch({ type: 'SET_SUBMITTING', payload: false });
    }
  };

  if (state.loading) return <div className="loading">Loading tests...</div>;
  if (state.error) return <div className="error">Error: {state.error}</div>;

  return (
    <div className="booking-container">
      <h1 className="text-2xl font-bold mb-6">Pathology Test Booking</h1>
      
      {/* Filter/Sort Controls */}
      <div className="flex gap-4 mb-6">
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Tests</option>
          <option value="blood">Blood Tests</option>
          <option value="urine">Urine Tests</option>
          <option value="imaging">Imaging</option>
        </select>
        
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      {/* Test Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Available Tests</h2>
        <ul className="space-y-3">
          {filteredTests.map(test => (
            <li 
              key={test.id} 
              className={`p-4 border rounded-lg transition-colors ${
                state.selectedTests.includes(test.id) 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <label className="flex items-center space-x-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={state.selectedTests.includes(test.id)}
                  onChange={() => handleTestSelection(test.id)}
                  className="h-5 w-5"
                />
                <div>
                  <h3 className="font-medium">{test.name}</h3>
                  <p className="text-sm">Price: ₹{test.price}</p>
                  <p className="text-xs text-gray-500">Category: {test.category}</p>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              value={patientDetails.name}
              onChange={(e) => setPatientDetails({...patientDetails, name: e.target.value})}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              value={patientDetails.email}
              onChange={(e) => setPatientDetails({...patientDetails, email: e.target.value})}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Phone</label>
            <input
              type="tel"
              value={patientDetails.phone}
              onChange={(e) => setPatientDetails({...patientDetails, phone: e.target.value})}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Appointment Date</label>
            <input
              type="date"
              value={state.appointmentDate}
              onChange={(e) => dispatch({ type: 'SET_DATE', payload: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={state.submitting || state.selectedTests.length === 0}
          className={`w-full py-2 px-4 rounded text-white ${
            state.submitting || state.selectedTests.length === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {state.submitting ? 'Submitting...' : 'Book Tests'}
        </button>

        {state.success && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
            Booking successful!
          </div>
        )}
      </form>
    </div>
  );
};

export default Booking;