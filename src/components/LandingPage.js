import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Landing Page!</h1>
      <nav>
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
};

export default LandingPage;