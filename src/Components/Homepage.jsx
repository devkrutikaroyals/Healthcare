import React from "react";
import "../Styles/Homepage.css"; // Import the external CSS
import StatsPage from "./StatsPage";
import NewsPage from "./NewsPage";

const Homepage = () => {
  return (
    <>
    <div className="homepage">
      <div className="text-container">
        <h1>Transforming Lives Through Excellence in Healthcare</h1>
        <p>We are committed to providing exceptional patient care and promoting wellness in our community.</p>
      </div>
    </div>
   
      <NewsPage/>
      <StatsPage/>
    
    </>
  );
};

export default Homepage;
