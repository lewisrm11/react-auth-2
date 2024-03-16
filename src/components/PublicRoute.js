// PublicRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PublicRoute = ({children}) => {
    const { isAuthenticated } = useContext(AuthContext);
  
    return isAuthenticated ? <Navigate to="/admin" replace /> : children;
  };
export default PublicRoute;
