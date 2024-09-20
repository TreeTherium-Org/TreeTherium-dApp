import React, { useState } from 'react';

const EditAddress = () => {
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address) {
      setMessage(`Address updated to: ${address}`);
      // Logic to handle the address update, e.g., API call
    } else {
      setMessage('Please enter a new address.');
    }
  };

  return (
    <div>
      <h2>Edit Address</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter new address"
          required
        />
        <button type="submit">Update Address</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EditAddress;
