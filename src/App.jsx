import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Services from "./Components/Services";
import Training from "./Components/Training";
import AboutUsSection from "./Components/AboutUsSection";
import Footer from "./Components/Footer";
import BookingForm from "./Components/BookingForm";



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/about" element={<AboutUsSection />} />
        <Route path="/book" element={<BookingForm />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
