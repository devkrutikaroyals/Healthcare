import React from "react";
import "../Styles/Footer.css"; // Add styles here

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are committed to providing quality healthcare services to our community. Your health is our priority.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@healthcare.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Healthcare St, City, Country</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Healthcare. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
