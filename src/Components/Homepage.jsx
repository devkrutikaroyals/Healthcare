import React from "react";
import "../Styles/Homepage.css";  
import backgroundImage from "../images/img3.jpg"; // Corrected import statement

const Homepage = () => {
  return (
    <div className="homepage">
      <div
        className="hero-section"
        style={{
          background: `url(${backgroundImage}) no-repeat center center/cover`,
          height: "100vh", // Full viewport height
        }}
      >
        <h1>Welcome to Healthcare Services</h1>
        <p>Your health, our priority. Providing top-notch healthcare solutions for everyone.</p>
      </div>
    </div>
  );
};

export default Homepage;
