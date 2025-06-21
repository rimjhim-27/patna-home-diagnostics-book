import { useEffect, useState } from 'react';
import { getBookings } from '../../services/api';

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getBookings();
        setBookings(response.data);
      } catch (error) {
        console.error('Failed to fetch bookings:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) return <div>Loading bookings...</div>;

  return (
    <div>
      <h2>All Bookings</h2>
      <table>
        {/* Render bookings data */}
      </table>
    </div>
  );
};