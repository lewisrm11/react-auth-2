// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useLocalStorage('user', null);
  const [token, setToken] = useLocalStorage('token', null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8002/api/login', {
        email,
        password,
      });

      // Store the user in local storage
      setUser(response.data);
      // Store the user in local storage
      setToken(response.data.data.token);

      // Handle successful login here
      console.log(response.data, user, token);
    } catch (error) {
      // Handle error here
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
