export const fetchTests = async () => {
  const response = await fetch('http://localhost:5000/api/booking/tests');
  return response.json();
};