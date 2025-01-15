import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Navbar component
import Homepage from "./Components/Homepage"; // Homepage component
import Services from "./Components/Services"; // Services component
import Training from "./Components/Training"; // Training component
import AboutUsSection from "./Components/AboutUsSection"; // About Us component
import FAQPage from "./Components/FAQPage"; // FAQ Page component
import Footer from "./Components/Footer/";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        < Footer />
      </Router>
    </>
  );
};

export default App;
