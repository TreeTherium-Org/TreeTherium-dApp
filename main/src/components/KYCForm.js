import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase"; // Ensure correct import

const KYCForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    address: "",
    idNumber: "",
    idType: "passport",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = auth.currentUser?.uid; // Get the current user's ID

    if (!userId) {
      console.error("User not logged in");
      return;
    }

    // Prepare the data to be saved
    const kycData = {
      ...formData,
      createdAt: new Date(),
    };

    try {
      // Save the data to Firestore under a "kyc" collection with user ID as the document ID
      await setDoc(doc(db, "kyc", userId), kycData);
      console.log("KYC data submitted successfully");

      // Optionally reset form data
      setFormData({
        fullName: "",
        dateOfBirth: "",
        address: "",
        idNumber: "",
        idType: "passport",
        profilePicture: null,
      });
    } catch (error) {
      console.error("Error submitting KYC data:", error);
    }
  };

  return (
    <div className="container">
      <h3>KYC Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>ID Number</label>
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>ID Type</label>
          <select name="idType" value={formData.idType} onChange={handleChange}>
            <option value="passport">Passport</option>
            <option value="national_id">National ID</option>
            <option value="driver_license">Driver License</option>
          </select>
        </div>

        <div className="form-group">
          <label>Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default KYCForm;
