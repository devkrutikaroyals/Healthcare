import React from 'react';
import '../Styles/Footer.css'; // Import the CSS for the footer

const Footer = () => {
  return (

    <>
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Us Section */}
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>If you have any questions, feel free to reach out!</p>
          <a href="/contact-us" className="contact-link">Visit Contact Page</a>
        </div>

        {/* Social Media Icons */}
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_2012.svg" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_logo_2016.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
