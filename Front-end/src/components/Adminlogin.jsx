import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/admin-login.css";

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:8080/admin-dashboard', {
          method: 'GET',
          credentials: 'include', // This is important to send cookies with the request
        });

        if (!response.ok) {
          // If not authorized, redirect to login
          navigate('/admin-login');
        } else {
          navigate('/admin/secure');
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        navigate('/admin-login');
      }
    };

    checkAuth();
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Handle successful response
      console.log(data);
      navigate('/admin/secure');
    } catch (error) {
      // Handle error
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='G_btn' type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
