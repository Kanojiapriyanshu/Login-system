import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <button onClick={handleLogout} style={{ margin: '10px', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Logout
      </button>
      <table border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.dateOfBirth}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
