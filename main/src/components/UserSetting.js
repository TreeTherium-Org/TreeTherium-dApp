import React, { useState } from "react";
import Section from "./layouts/Section";
import { Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage, auth } from "../firebase"; // Ensure Firebase imports

const UserSetting = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [headerPicture, setHeaderPicture] = useState(null);
  const [uploading, setUploading] = useState(false);

  const userId = auth.currentUser?.uid; // Get the current user ID
  const username = auth.currentUser?.displayName || "User"; // For demonstration

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleHeaderPictureChange = (e) => {
    setHeaderPicture(e.target.files[0]);
  };

  const handleUpload = async () => {
    setUploading(true);

    try {
      if (profilePicture) {
        const profileRef = ref(storage, `users/${userId}/profilePicture.jpg`);
        await uploadBytes(profileRef, profilePicture);
        const profileUrl = await getDownloadURL(profileRef);

        await updateDoc(doc(db, "users", userId), {
          profilePictureUrl: profileUrl,
        });
      }

      if (headerPicture) {
        const headerRef = ref(storage, `users/${userId}/headerPicture.jpg`);
        await uploadBytes(headerRef, headerPicture);
        const headerUrl = await getDownloadURL(headerRef);

        await updateDoc(doc(db, "users", userId), {
          headerPictureUrl: headerUrl,
        });
      }

      console.log("Profile and header pictures updated successfully");
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Section allNotification={false} searchPopup={true} title="Profile Settings">
      <div className="balance-area pd-top-40">
        <div className="container">
          <div className="section-title">
            <h3 className="title">Update Your Information</h3>
          </div>

          <div className="balance-area-bg pt-5 bg-user-setting">
            <Link className="edit-title" to="/edit-profile">Edit</Link>
            <div
              className="ba-balance-inner text-center"
              style={{ backgroundImage: "url(assets/img/bg.profile.png)" }}
            >
              <div className="icon mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/user.png`}
                  alt="Profile"
                  className="w-500 h-500 mx-auto rounded-full border-4 border-green-500" // Adjusted size and circular frame
                />
              </div>
              <h5 className="title mb-0">{username}</h5> {/* Display Username */}
            </div>
          </div>
        </div>
      </div>

      <div className="transaction-details pd-top-36 mg-bottom-35">
        <div className="container">
          <div className="section-title">
            <h3 className="title">Profile Settings</h3>
          </div>

          <ul className="transaction-details-inner">
            {/* Profile Picture Upload */}
            <li>
              <span className="float-left">Change Profile Picture</span>
              <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
            </li>

            {/* Header Picture Upload */}
            <li>
              <span className="float-left">Change Header Picture</span>
              <input type="file" accept="image/*" onChange={handleHeaderPictureChange} />
            </li>

            {/* Other Settings (Username, Email, etc.) */}
            <li>
              <Link to="/change-username">
                <span className="float-left">Change Username</span>
                <span className="float-right">
                  <i className="la la-angle-right" />
                </span>
              </Link>
            </li>

            <li>
              <Link to="/update-email">
                <span className="float-left">Email Update</span>
                <span className="float-right">
                  <i className="la la-angle-right" />
                </span>
              </Link>
            </li>

            <li>
              <Link to="/edit-address">
                <span className="float-left">Edit Address</span>
                <span className="float-right">
                  <i className="la la-angle-right" />
                </span>
              </Link>
            </li>

            <li>
              <Link to="/manage-wallets">
                <span className="float-left">Manage Wallet</span>
                <span className="float-right">
                  <i className="fa fa-plus" />
                </span>
              </Link>
            </li>

            <li>
              <Link to="/change-password">
                <span className="float-left">Change Password</span>
                <span className="float-right">
                  <i className="la la-angle-right" />
                </span>
              </Link>
            </li>

            <li>
              <Link to="/delete-account">
                <span className="float-left">Delete Account</span>
                <span className="float-right">
                  <i className="la la-angle-right" />
                </span>
              </Link>
            </li>
          </ul>

          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={handleUpload}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default UserSetting;
