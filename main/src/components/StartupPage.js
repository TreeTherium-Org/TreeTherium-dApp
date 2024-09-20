import React from "react";
import './StartupPage.css'; // Make sure you have this CSS file for styles

const StartupPage = () => {
    return (
        <div className="startup-page">
            <img src={`${process.env.PUBLIC_URL}/assets/img/Startup Page.png`} alt="Loading" className="startup-image" />
            <p>Loading...</p>
        </div>
    );
};

export default StartupPage;
