import React, { useState, useEffect } from 'react';
import '../Styles/AboutUsSection.css'; // Import the CSS file
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import About from '../images/img8.jpg'; // Import the image

const AboutUsSection = () => {
  const [showMore, setShowMore] = useState(false); // State for "Read More" functionality

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  const handleReadMore = () => {
    setShowMore(!showMore); // Toggle the "Read More" state
  };

  return (
    <section className="about-us-section">
      {/* Page heading */}
      <h1 className="page-heading">About Us</h1>

      <div className="about-us-container">
        {/* Left Text Content */}
        <div
          className="about-us-text-content"
          data-aos="fade-right" // AOS animation for text content
        >
          <h1 className="about-us-title">
            We always deliver expertise and compassion in every interaction.
          </h1>
          <p className="about-us-description">
            <strong>Experience exceptional medical care at the General Hospital,</strong> a luxury hospital designed to provide comfortable and personalized healthcare services to its guests.
          </p>
          <p className="about-us-description">
            General Hospital is a luxury medical facility that provides top-notch medical care to its patients. With state-of-the-art technologies and experienced medical professionals, we offer personalized treatment options for all kinds of medical conditions. Our facility is equipped with comfortable and spacious rooms.
          </p>
          <p className="about-us-description">
            "Experience top-notch medical care at General Hospital, where our expert team of doctors and modern facilities ensure your well-being. Rest easy in our luxurious accommodations and ease your worries."
          </p>
          <button
            className="about-us-button"
            onClick={handleReadMore}
            data-aos="zoom-in" // AOS animation for the button
            data-aos-delay="500" // Delay for the animation
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
          {showMore && (
            <div
              className="additional-info"
              data-aos="fade-up" // AOS animation for additional info
              data-aos-delay="700" // Delay for the animation
            >
              <h3>Our Healthcare Services</h3>
              <ul>
                <li>Comprehensive medical check-ups</li>
                <li>Advanced diagnostic imaging</li>
                <li>Specialized care in cardiology, orthopedics, and oncology</li>
                <li>State-of-the-art surgical procedures</li>
                <li>Rehabilitation and wellness programs</li>
                <li>24/7 emergency services</li>
              </ul>
              <p>
                At General Hospital, we are committed to offering compassionate care and leveraging the latest medical technologies to ensure the best outcomes for our patients.
              </p>
            </div>
          )}
        </div>

        {/* Right Image */}
        <div
          className="about-us-image-container"
          data-aos="fade-left" // AOS animation for image
          data-aos-delay="300" // Delay for image animation
        >
          <img
            src={About}
            alt="Doctors performing surgery"
            className="about-us-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
