import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Design from "./components/Design";
import Development from "./components/Development";
import Contact from "./components/Contact";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "white" : "grey",
      textDecoration: "none",
    };
  };

  return (
    <Router>
      <nav className="nav justify-content-center bg-body-tertiary border-bottom border-body" data-bs-theme="dark">
        <NavLink style={navStyle} to="home" className="nav-link">
          Home
        </NavLink>
        <NavLink style={navStyle} to="about" className="nav-link">
          About
        </NavLink>
        <NavLink style={navStyle} to="services" className="nav-link">
          Services
        </NavLink>
        <NavLink style={navStyle} to="contact" className="nav-link">
          Contact Us
        </NavLink>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/gallery" element={<Design />} />
          <Route path="/services/placements" element={<Development />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
