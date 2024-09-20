import React from "react";
import Section from "./layouts/Section";
import { Link } from "react-router-dom";

const UserSetting = () => {
  return (
    <Section allNotification={false} searchPopup={true} title="User Settings">
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
              <h5 className="title mb-0">Ain</h5> {/* Display Username */}
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
            {/* Notification Sound Setting */}
            <li>
              <span className="float-left">Notification Sound</span>
              <span className="float-right">Beep</span>
            </li>

            {/* Change Username */}
            <li>
              <Link to="/change-username">
                <span className="float-left">Change Username</span>
                <span className="float-right">
                  <i className="la la-angle-right" />
                </span>
              </Link>
            </li>

            {/* Email Update */}
            <li>
              <Link to="/update-email">
                <span className="float-left">Email Update</span>
                <span className="float-right">
                  <i className="la la-angle-right" />
                </span>
              </Link>
            </li>

            {/* Edit Address */}
            <li>
              <Link to="/edit-address">
                <span className="float-left">Edit Address</span>
                <span className="float-right">
                  <i className="la la-angle-right" />
                </span>
              </Link>
            </li>

            {/* Wallet Management */}
            <li>
              <Link to="/manage-wallets">
                <span className="float-left">Add Wallet</span>
                <span className="float-right">
                  <i className="fa fa-plus" />
                </span>
              </Link>
            </li>

            {/* Password Change */}
            <li>
              <Link to="/change-password">
                <span className="float-left">Change Password</span>
                <span className="float-right">
                  <i className="la la-angle-right" />
                </span>
              </Link>
            </li>

            {/* Delete Account */}
            <li>
              <Link to="/delete-account">
                <span className="float-left">Delete Account</span>
                <span className="float-right">
                  <i className="la la-angle-right" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default UserSetting;
