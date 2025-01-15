import React, { useState } from "react";
import "../Styles/Training.css";
import firstAidImg from "../images/img1.jpg";
import healthSafetyImg from "../images/img5.jpg";
import mentalHealthImg from "../images/img10.jpg";
import nutritionImg from "../images/img13.jpg";

const Training = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookingClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Training booked successfully!");
    setShowForm(false);
  };

  return (
    <>
      <div className="training">
        <h1 className="training-title">Explore Our Training Programs</h1>
        <p className="training-intro">
          Choose from a variety of training programs to enhance your skills and knowledge.
        </p>

        <div className="training-list">
          <div className="training-card">
            <img src={firstAidImg} alt="First Aid Training" className="training-img" />
            <h2>First Aid Training</h2>
            <p>Learn essential life-saving skills for emergencies.</p>
            <button className="booking-btn" onClick={handleBookingClick}>
              Book Training
            </button>
          </div>
          <div className="training-card">
            <img src={healthSafetyImg} alt="Health & Safety Training" className="training-img" />
            <h2>Health & Safety Training</h2>
            <p>Understand workplace safety measures and protocols.</p>
            <button className="booking-btn" onClick={handleBookingClick}>
              Book Training
            </button>
          </div>
          <div className="training-card">
            <img src={mentalHealthImg} alt="Mental Health Awareness" className="training-img" />
            <h2>Mental Health Awareness</h2>
            <p>Promote mental well-being with expert guidance.</p>
            <button className="booking-btn" onClick={handleBookingClick}>
              Book Training
            </button>
          </div>
          <div className="training-card">
            <img src={nutritionImg} alt="Nutrition & Wellness" className="training-img" />
            <h2>Nutrition & Wellness</h2>
            <p>Learn about healthy eating habits and lifestyle.</p>
            <button className="booking-btn" onClick={handleBookingClick}>
              Book Training
            </button>
          </div>
        </div>

        {showForm && (
          <div className="form-overlay">
            <div className="form-container">
              <h2>Training Booking Form</h2>
              <form onSubmit={handleFormSubmit}>
                <label>
                  Name:
                  <input type="text" required />
                </label>
                <label>
                  Email:
                  <input type="email" required />
                </label>
                <label>
                  Phone Number:
                  <input type="tel" required />
                </label>
                <label>
                  Selected Training:
                  <select required>
                    <option value="First Aid Training">First Aid Training</option>
                    <option value="Health & Safety Training">Health & Safety Training</option>
                    <option value="Mental Health Awareness">Mental Health Awareness</option>
                    <option value="Nutrition & Wellness">Nutrition & Wellness</option>
                  </select>
                </label>
                <div className="form-actions">
                  <button type="submit" className="submit-btn">Submit</button>
                  <button type="button" className="cancel-btn" onClick={handleFormClose}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Training;
