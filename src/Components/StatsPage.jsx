import React from "react";
import "../Styles/StatsPage.css"; // External CSS file for styling
import statsBackground from "../images/bgnew1.jpg"; // Optional: Background image

const StatsPage = () => {
  const statsData = [
    { title: "Patients Treated", count: "50,000+", icon: "🩺" },
    { title: "Doctors Available", count: "250+", icon: "👨‍⚕️" },
    { title: "Years of Experience", count: "20+", icon: "📆" },
    { title: "Departments", count: "30+", icon: "🏥" },
    { title: "Emergency Services", count: "24/7", icon: "🚑" },
  ];

  return (
    <div
      className="stats-page"
      style={{ backgroundImage: `url(${statsBackground})` }}
    >
      <h1 className="stats-title" data-aos="fade-up">
        Our Achievements
      </h1>
      <p className="stats-description" data-aos="fade-up" data-aos-delay="200">
        We are proud to serve our community with excellence in healthcare.
      </p>
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div
            className="stats-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`} // Incremental delay
          >
            <div className="stats-icon">{stat.icon}</div>
            <h2 className="stats-count">{stat.count}</h2>
            <p className="stats-title">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPage;
