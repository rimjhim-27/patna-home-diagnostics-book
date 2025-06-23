import { useEffect, useState } from 'react';
import { fetchTests } from '../services/api';

export default function Booking() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTests = async () => {
      try {
        const tests = await fetchTests();
        setTests(tests);
      } catch (err) {
        setError('Failed to load tests');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTests();
  }, []);

  if (loading) return <div>Loading tests...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="booking-container">
      <h2>Available Medical Tests</h2>
      <ul className="test-list">
        {tests.map(test => (
          <li key={test.id} className="test-item">
            <h3>{test.name}</h3>
            <p>Price: ₹{test.price}</p>
            {test.description && <p>{test.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}