import React from "react";
import { NavLink } from "react-router-dom";
import { Person } from "react-bootstrap-icons";

import logo from "./logo.png";
const Nav = () => {
  return (
    <>
      <div id="main-header">
        <img id="main-logo" src={logo} alt="logo" />
        <nav id="main-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies/new">Add Movie</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </nav>
        <button className="btn btn-outline-success text-white border-white">
          <Person /> Login
        </button>
      </div>
    </>
  );
};

export default Nav;
