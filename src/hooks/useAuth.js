// useAuth.js
import axios from 'axios';
import useLocalStorage from './useLocalStorage';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useLocalStorage('user', null);
  const [token, setToken] = useLocalStorage('token', null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //const navigate = useNavigate();


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

  const logout = async () => {
    try {
      // Make a request to your API
      await axios.post('http://localhost:8002/api/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Clear the user and token from local storage
      setUser(null);
      setToken(null);

      // Set isAuthenticated to false
      setIsAuthenticated(false);

      // Redirect to the landing page
      //navigate('/');
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
    logout
  };
};

export default useAuth;
