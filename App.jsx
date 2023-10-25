// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
