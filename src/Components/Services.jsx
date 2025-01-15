import React from "react";
import "../Styles/Services.css";

// Import images
import consultationImg from "../images/img4.jpg";
import emergencyImg from "../images/img7.jpg";
import pharmacyImg from "../images/img11.jpg";
import wellnessImg from "../images/img7.jpg";

const Services = () => {
  const services = [
    {
      title: "General Consultation",
      description: "Get expert advice and treatment from our experienced medical professionals.",
      image: consultationImg,
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency care for critical health concerns and accidents.",
      image: emergencyImg,
    },
    {
      title: "Pharmacy Support",
      description: "Access a wide range of medicines and healthcare products at our pharmacy.",
      image: pharmacyImg,
    },
    {
      title: "Wellness Programs",
      description: "Participate in programs designed to improve your overall health and well-being.",
      image: wellnessImg,
    },
  ];

  return (
    <div className="services">
      <h1 className="services-title">Our Services</h1>
      <p className="services-description">
        We offer a variety of healthcare services to meet your needs.
      </p>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
