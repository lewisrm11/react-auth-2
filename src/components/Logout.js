// LogoutPage.js
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const LoginPage = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {/* Your login form here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginPage;
