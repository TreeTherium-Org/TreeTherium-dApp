import React, { useState } from 'react';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Implement API call to change password here
        console.log('Old Password:', oldPassword);
        console.log('New Password:', newPassword);
    };

    return (
        <div className="container">
            <h3>Change Password</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Old Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={oldPassword} 
                        onChange={(e) => setOldPassword(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Change Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;
