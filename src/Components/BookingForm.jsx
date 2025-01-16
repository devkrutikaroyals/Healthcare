import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/BookingForm.css"; // Add styles here

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name}`);
    console.log(formData); // Log the data for testing

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
    });

    // Redirect to home after form submission (optional)
    navigate("/");
  };

  return (
    <div className="booking-form-container">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Service:
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="General Checkup">General Checkup</option>
            <option value="Dental Care">Dental Care</option>
            <option value="Physiotherapy">Physiotherapy</option>
            <option value="Pediatric Services">Pediatric Services</option>
          </select>
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="submit-button">
          Confirm Booking
        </button>
      </form>
      <button onClick={() => navigate("/")} className="home-button">
        Home
      </button>
    </div>
  );
};

export default BookingForm;
