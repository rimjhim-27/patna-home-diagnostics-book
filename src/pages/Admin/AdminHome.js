import { useEffect, useState } from 'react';
import { getDashboardStats } from '../../services/api'; // Add this import

const AdminHome = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getDashboardStats();
        setStats(response.data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div className="admin-home">
      <h1>Dashboard Overview</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Bookings</h3>
          <p>{stats.totalBookings}</p>
        </div>
        <div className="stat-card">
          <h3>Pending Results</h3>
          <p>{stats.pendingResults}</p>
        </div>
        <div className="stat-card">
          <h3>New Messages</h3>
          <p>{stats.newMessages}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;