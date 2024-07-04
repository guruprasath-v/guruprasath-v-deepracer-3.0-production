import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/user/reset-password', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          currentPassword: currentPassword,
          newPassword: newPassword,
        }),
      });

      if (response.ok) {
        // Password reset successfully
        setMessage("Password changed successfully");
        setTimeout(() => {
          navigate("/logout");
        }, 2000); // Navigate to login after 2 seconds
      } else {
        // Failed to reset password
        setMessage("Failed to change password");
      }

      const data = await response.json();
      if (data.message) {
        setMessage(data.message); // Display additional message from backend
      }

      // Clear form inputs after successful reset or failed attempt
      setUsername('');
      setCurrentPassword('');
      setNewPassword('');
    } catch (error) {
      console.error('Error resetting password:', error);
      setMessage('Failed to reset password');
    }
  };

  return (
    <div className='admin-login-container'>
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Password Reset</h2>
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
          <label htmlFor="currentPassword">Current Password:</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button className='G_btn' type="submit">Reset</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Reset;
