import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../images/logo.png";

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
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
      <div className="navbar-button">
        <button className="booking-button">Booking as Services</button>
      </div>
    </nav>
  );
};

export default Navbar;
