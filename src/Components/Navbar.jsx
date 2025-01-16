import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../images/logo1.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/training">Training</Link></li>
      
        <li>
          {/* Direct link to Booking Form page */}
          <Link to="/book" className="booking-button">Book a Service</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;