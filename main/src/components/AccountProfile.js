import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase"; // Import your initialized Firebase instance
import Section from "./layouts/Section";
import { Link } from "react-router-dom";

const AccountProfile = () => {
  const [userData, setUserData] = useState(null);
  const userId = auth.currentUser?.uid; // Get the currently logged-in user's ID

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const docRef = doc(db, "users", userId); // Replace "users" with your collection name
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  return (
    <Section allNotification={false} searchPopup={true} title="Account Profile">
      <div className="profile-area pd-top-40">
        <div className="container">
          <div className="section-title">
            <h3 className="title">Your Account Information</h3>
          </div>

          <div className="profile-area-bg pt-5 bg-account-profile">
            <div
              className="profile-inner text-center"
              style={{ backgroundImage: "url(assets/img/bg.profile.png)" }}
            >
              <div className="icon mb-4">
                <img
                  src={userData.profilePicture || `${process.env.PUBLIC_URL}/assets/img/user.png`}
                  alt="Profile"
                  className="w-500 h-500 mx-auto rounded-full border-4 border-green-500" // Circular profile picture
                />
              </div>
              <h5 className="title mb-0">{userData.username}</h5> {/* Display Username */}
              <p className="email">{userData.email}</p> {/* Display Email */}
              <p className="bio">{userData.bio || "No bio available."}</p> {/* Display Bio */}
            </div>

            <div className="profile-actions text-center pt-3">
              {/* Redirect to UserSetting component */}
              <Link className="btn btn-primary mr-2" to="/user-setting">Edit Profile</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="account-details pd-top-36 mg-bottom-35">
        <div className="container">
          <div className="section-title">
            <h3 className="title">Account Details</h3>
          </div>

          <ul className="account-details-inner">
            {/* Username */}
            <li>
              <span className="float-left">Username</span>
              <span className="float-right">{userData.username}</span> {/* Display Username */}
            </li>

            {/* Email */}
            <li>
              <span className="float-left">Email</span>
              <span className="float-right">{userData.email}</span> {/* Display Email */}
            </li>

            {/* Bio */}
            <li>
              <span className="float-left">Bio</span>
              <span className="float-right">{userData.bio || "No bio available."}</span> {/* Display Bio */}
            </li>

            {/* Address */}
            <li>
              <span className="float-left">Address</span>
              <span className="float-right">{userData.address || "No address provided."}</span> {/* Display Address */}
            </li>

            {/* Joined Date */}
            <li>
              <span className="float-left">Joined</span>
              <span className="float-right">{userData.joinedDate || "Unknown"}</span> {/* Display Join Date */}
            </li>

            {/* Wallet Info */}
            <li>
              <Link to="/manage-wallets">
                <span className="float-left">Manage Wallets</span>
                <span className="float-right">
                  <i className="fa fa-wallet" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default AccountProfile;
