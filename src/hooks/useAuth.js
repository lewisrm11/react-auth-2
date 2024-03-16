// useAuth.js
import axios from 'axios';
import useLocalStorage from './useLocalStorage';
import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useLocalStorage('user', null);
  const [token, setToken] = useLocalStorage('token', null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8002/api/login', {
        email,
        password,
      });

      // Store the user in local storage
      setUser(response.data);
      setToken(response.data.data.token)


      // Set isAuthenticated to true after successful login
      setIsAuthenticated(true);

      // Handle successful login here
      console.log(response.data);
    } catch (error) {
      // Handle error here
      console.error(error);
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
  };
};

export default useAuth;
