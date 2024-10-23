import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div className="container mt-5">
      <h2>Services</h2>
    
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="gallery" className="nav-link">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="placements" className="nav-link">Placements</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Services;
