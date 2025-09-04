import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import Home from "./pages/Home";
// import Services from "./pages/Services";

import ThankYou from "./pages/ThankYou";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}

        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
