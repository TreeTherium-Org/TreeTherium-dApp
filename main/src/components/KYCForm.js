import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, auth, storage } from "../firebase"; // Ensure correct import
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase Storage functions
import Section from "./layouts/Section";

const KYCForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    address: "",
    idNumber: "",
    idType: "passport",
    profilePicture: null,
  });

  const [uploading, setUploading] = useState(false); // To manage upload state
  const [error, setError] = useState(null); // For handling any errors
  const [success, setSuccess] = useState(false); // For handling success messages

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
      setError("User not logged in");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      let profilePictureUrl = "";

      // Check if a profile picture was uploaded
      if (formData.profilePicture) {
        const pictureRef = ref(storage, `kyc/${userId}/profilePicture.jpg`); // Set storage path
        await uploadBytes(pictureRef, formData.profilePicture); // Upload picture
        profilePictureUrl = await getDownloadURL(pictureRef); // Get the picture URL
      }

      // Prepare the data to be saved
      const kycData = {
        ...formData,
        profilePictureUrl, // Store the image URL, not the file
        createdAt: new Date(),
      };

      // Save the data to Firestore under a "kyc" collection with user ID as the document ID
      await setDoc(doc(db, "kyc", userId), kycData);
      setSuccess(true);
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
      setError("Error submitting KYC data. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Section allNotification={false} searchPopup={true} title="Account Profile">
      <div className="profile-area pd-top-40">
        <div className="container">
          <div className="section-title">
            <h3 className="title">Your Account Information</h3>
          </div>
          <div className="kyc-form-area">
            {success && <p className="text-success">KYC data submitted successfully!</p>}
            {error && <p className="text-danger">{error}</p>}
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
                  <option value="ic">IC / MYKad</option> {/* New option for IC / MYKad */}
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

              <button type="submit" className="btn btn-primary" disabled={uploading}>
                {uploading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default KYCForm;
