// AuthContext.js
import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => {},
  setUser: () => {},
  login: () => {},
  logout: () => {},
  token: null,
  setToken: () => {}
});

export const AuthProvider = ({ children }) => {
  const  {
    user,
    token,
    isAuthenticated,
    setIsAuthenticated,
    login,
    logout
  } = useAuth();

  useEffect(() => {
    // Check for token in local storage on app load
    //const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token, setIsAuthenticated]);

  return (
    <AuthContext.Provider value={{
      user,
      token,
      isAuthenticated,
      setIsAuthenticated,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};
