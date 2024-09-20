import React, { useState } from 'react';

const ChangeUsername = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update the username, e.g., API call
    // For now, we'll just simulate a successful change
    if (username) {
      setMessage(`Username changed to: ${username}`);
      setUsername(''); // Clear input field after submission
    } else {
      setMessage('Please enter a new username.');
    }
  };

  return (
    <div>
      <h2>Change Username</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter new username"
          required
        />
        <button type="submit">Change Username</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangeUsername;
