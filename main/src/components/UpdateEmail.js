import React, { useState } from 'react';

const UpdateEmail = ({ existingEmail }) => {
  const [email, setEmail] = useState(existingEmail);
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage(`Email updated to: ${email}`);
      // Add logic to handle the email update, e.g., API call
    } else {
      setMessage('Please enter a new email.');
    }
  };

  return (
    <div>
      <h2>Update Email</h2>
      <p>Current Email: {existingEmail}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter new email"
          required
        />
        <button type="submit">Update Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateEmail;
