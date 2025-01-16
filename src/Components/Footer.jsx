import React from "react";
import "../Styles/Footer.css"; // Make sure to use the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing top-notch healthcare services to the
            community. Our team of experts ensures the best care for all.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul className="quick-links-list">
            <li><a href="#services">Our Services</a></li>
            <li><a href="#appointments">Book an Appointment</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section contact-us">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:contact@healthcare.com">contact@healthcare.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p>Address: 123 Healthcare Street, City, State</p>
        </div>

       

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        &copy; 2025 Healthcare Services. All rights reserved.
      </div>

      </div>
    </footer>
  );
};

export default Footer;
