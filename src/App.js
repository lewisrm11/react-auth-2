// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './components/LandingPage'; // make sure the path is correct
import LoginPage from './components/LoginPage'; // make sure the path is correct
import RegisterPage from './components/RegisterPage'; // make sure the path is correct
import Dashboard from './pages/Dashboard'; // make sure the path is correct
import Profile from './pages/Profile'; // make sure the path is correct
import AdminLayout from './layouts/AdminLayout'; // make sure the path is correct
import PrivateRoute from './components/PrivateRoute'; // make sure the path is correct
import PublicRoute from './components/PublicRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link><br></br>
            <Link to="/login">Login</Link><br></br>
            <Link to="/register">Register</Link><br></br>
            <Link to="/admin">Admin</Link><br></br>
          </nav>
          <Routes>
            <Route path="/" element={<PublicRoute ><LandingPage /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute ><LoginPage /></PublicRoute>} />
            <Route path="/register" element={<PublicRoute ><RegisterPage /></PublicRoute>} />
            <Route path="/admin/*" element={<PrivateRoute> <AdminLayout /></PrivateRoute>}></Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
