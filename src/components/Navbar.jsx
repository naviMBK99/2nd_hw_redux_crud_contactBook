import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="sidebar-container position-fixed"
      style={{ width: "200px" }}
    >
      <div className="sidebar">
        <div className="d-flex flex-column">
          <div className="p-2">
            <NavLink to={"/"} className="text-white">
              Contacts
            </NavLink>
          </div>
          <div className="p-2">
            <NavLink to={"/add"} className="text-white">
              Contact Form
            </NavLink>
          </div>
          <div className="p-2">
            <NavLink to={"/details"} className="text-white">
              Contact Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
