// AuthContext.js
import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => {},
  setUser: () => {},
  login: () => {},
  token: null,
  setToken: () => {}
});

export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};
