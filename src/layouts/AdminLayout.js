// AdminLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

const AdminLayout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
        <h1>welcome to admin!</h1>
      <nav>
        <Link to="dashboard">Dashboardx</Link><br></br>
        <Link to="profile">Profilex</Link>
        <button onClick={handleLogout}>Logout</button>
        {/* Add more links here as needed */}
      </nav>
      <main>
      <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminLayout;
