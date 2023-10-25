// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="aboutus">About Us</link>
        </li>
        <li>
          <link to="/contact">Contact</link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
